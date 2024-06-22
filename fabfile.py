"""Fabric file to automate the project tasks."""
import subprocess
import json
import git
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

@task
def init(ctx):
    """Initialize the project."""
    # Add your initialization code here

def get_version():
    """Return the version of the package."""
    with open('package.json', 'r', encoding='utf8') as f:
        package = json.load(f)
    return package['version']

@task
def test(ctx):
    """Run the tests with Maven."""
    result= run_command("mvn clean test")
    print(result)

@task
def version(ctx):
    """Return the version."""
    return print(get_version())

@task
def release(ctx):
    """Create and push a new release."""
    repo = git.Repo('.')
    current_branch = repo.active_branch.name

    # run conventional commits
    run_command('standard-version')
    new_version = get_version()

    # Create a commit with the release version
    commit_message = f"chore: release\n\n#{new_version}"
    repo.index.add('*')
    repo.index.commit(commit_message)
    repo.remote().push(current_branch)
    print("Release commit created and pushed successfully")

    # Create or checkout the release branch and push it to the remote repository
    if any(branch.name == 'release' for branch in repo.branches):
        release_branch = repo.branches['release']
        release_branch.checkout()
    else:
        release_branch = repo.create_head('release')
    repo.remote().push('release')
    print("Create release branch and push it to the remote repository")

    # Merge the release branch into the main branch and push it to the remote repository
    main_branch = repo.branches['main']
    main_branch.checkout()
    repo.git.merge('release')
    repo.remote().push('main')
    print("Release merged into the main branch and pushed to the remote repository")

    # Switch back to the original branch and delete the release branch
    repo.git.checkout(current_branch)
    repo.delete_head('release', force=True)
    repo.remote().push(refspec=":refs/heads/release")
    print(f"Release {new_version} created and pushed successfully")
