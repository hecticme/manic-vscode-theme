import fsPromises from 'node:fs/promises'
import { manicTheme } from './theme.js'

fsPromises.mkdir('./themes', { recursive: true })
  .then(() => fsPromises.writeFile(
    './themes/manic.json',
    JSON.stringify(manicTheme, null, 2)
  ))
