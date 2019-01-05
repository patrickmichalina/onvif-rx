import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'onvif',
      globals: {
        react: 'React',
        'typescript-monads': 'typescript-monads',
        'crypto-js': 'crypto-js',
        'xmldom': 'xmldom',
        'rxjs/operators': 'rxjs/operators'
      },
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    'rxjs/operators'
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.rollup.json'
    })
  ]
}

