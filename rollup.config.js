import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const external = [
  ...Object.keys(pkg.dependencies || {}),
  'rxjs/operators'
]

const plugins = [
  typescript({
    tsconfig: './tsconfig.rollup.json'
  })
]

export default [
  {
    input: 'src/browser.ts',
    external,
    plugins,
    output: [
      {
        file: `dist/${pkg.browser}`,
        format: 'umd',
        name: 'onvif',
        globals: {
          'typescript-monads': 'typescriptMonads',
          'rxjs/operators': 'rxjs/operators'
        }
      }
    ]
  },
  {
    input: 'src/node.ts',
    external,
    plugins,
    output: [
      {
        file: `dist/${pkg.main}`,
        format: 'cjs'
      },
      {
        file: `dist/${pkg.module}`,
        format: 'es'
      }
    ]
  }
]
