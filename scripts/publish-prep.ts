import { copy, ensureDir } from 'fs-extra'
import { resolve } from 'path'

const targetDir = resolve('dist')
const filesToCopy: ReadonlyArray<string> = [
  'package.json',
  'README.md',
  'LICENSE'
]

ensureDir(targetDir)
  .then(() => Promise.all(filesToCopy.map(path => copy(path, resolve(targetDir, path)))))
