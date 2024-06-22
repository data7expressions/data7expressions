"""Fabric file to automate the project tasks."""
import subprocess
import shutil
import json
import os
from fabric import task

# Function to execute shell commands
def run_command(command, cwd=None):
    """Run a shell command and return the output."""
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, cwd=cwd)
    # Leer la salida del comando en tiempo real
    while True:
        output = process.stdout.readline()
        if output == '' and process.poll() is not None:
            break
        if output:
            print(output.strip())    
    # Asegurarse de que el proceso haya terminado
    rc = process.poll()
    return rc

def nvl(value, default):
    """Return the value if it is not None, otherwise return the default value."""
    if value is None or value == 0 or (isinstance(value, str) and value.strip() == ""):
        return default
    else:
        return value

def copy(operations):
    """Copy the files to the build directory."""
     # Realizar las operaciones de copiado
    for operation in operations:
        src = operation['src']
        dest = operation['dest']
        if operation['is_dir']:
            if os.path.exists(dest):
                shutil.rmtree(dest)  # Eliminar el destino si ya existe
            shutil.copytree(src, dest)
        else:
            shutil.copy2(src, dest)

def version():
    """Return the version of the package."""
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
    package_json_path = os.path.join(parent_dir, 'package.json')
    with open(package_json_path, 'r', encoding='utf8') as f:
        package = json.load(f)
    return package['version']

def create_package():
    """Create the package.json file for the distribution."""
    with open('package.json', 'r', encoding='utf8') as f:
        package = json.load(f)
    package.pop('devDependencies', None)
    package.pop('private', None)
    package.pop('scripts', None)
    package['main'] = 'index.js'
    package['types'] = 'index.d.ts'
    package['version'] = version()
    if not os.path.exists('dist'):
        os.makedirs('dist')
    with open('dist/package.json', 'w', encoding='utf8') as f:
        json.dump(package, f, ensure_ascii=False, indent=2)

@task
def build(ctx):
    """Delete the build directory."""
    shutil.rmtree("build", ignore_errors=True)
    shutil.rmtree("dist", ignore_errors=True)
    print(nvl(run_command('npx tsc'), "Build completed"))

@task
def test(ctx):
    """Run the tests."""
    build(ctx)
    print(nvl(run_command('npx eslint src'), "Lint passed"))
    run_command('npx jest --config jest-config.json')

@task
def doc(ctx):
    """Generate the documentation."""
    run_command('npx typedoc --plugin typedoc-plugin-markdown --out doc/source src/lib/index.ts')

@task
def dist(ctx):
    """Build the distribution files."""
    test(ctx)
    copy_operations = [
        {'src': 'build/lib', 'dest': 'dist', 'is_dir': True},
        {'src': './README.md', 'dest': 'dist/README.md', 'is_dir': False},
        {'src': './LICENSE', 'dest': 'dist/LICENSE', 'is_dir': False},
        {'src': './jest-config.json', 'dest': 'dist/jest-config.json', 'is_dir': False},        
    ]
    copy(copy_operations)
    create_package()
    