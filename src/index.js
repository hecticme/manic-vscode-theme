import fsPromises from 'node:fs/promises'
import { manicTheme } from './theme.js'
import { manicLightTheme } from './theme-light.js'
import { manicPaleTheme } from './theme-pale.js'

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
    fsPromises.writeFile(
      './themes/manic-pale.json',
      JSON.stringify(manicPaleTheme, null, 2)
    ),
  ]))
