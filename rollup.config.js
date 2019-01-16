import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import builtins from 'rollup-plugin-node-builtins'
// import globals from 'rollup-plugin-node-globals'

const external = [
  ...Object.keys(pkg.dependencies || {}),
  'rxjs/operators',
  'buffer'
]

const plugins = [
  // globals(),
  builtins(),
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
          'rxjs/operators': 'rxjs/operators',
          'buffer': 'Buffer'
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
