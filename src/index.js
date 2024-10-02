import fsPromises from 'node:fs/promises'
import { manicTheme } from './theme.js'
import { manicLightTheme } from './theme-light.js'

fsPromises.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fsPromises.writeFile(
      './themes/manic.json',
      JSON.stringify(manicTheme, null, 2)
    ),
    fsPromises.writeFile(
      './themes/manic-light.json',
      JSON.stringify(manicLightTheme, null, 2)
    ),
  ]))
