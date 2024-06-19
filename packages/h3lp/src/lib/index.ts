import { H3lpBuilder } from './infrastructure/builder'
export const h3lp = new H3lpBuilder().build()
export * from './domain/index' // Assuming the 'domain' module is located in the 'index.ts' file inside the 'domain' folder
export * from './application/index'
export * from './infrastructure/index'
