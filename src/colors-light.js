export const manicLightColors = {
  transparent: '#0000',
  accent: '#1a1a1e',
  background: {
    editor: '#fcfcfc',
    sideBar: '#f2f2f4',
    toolbar: '#e9e9ec',
    input: '#e3e3e7',
    commandCenter: '#dadbe1',
  },
  foreground: {
    editor: '#383840',
    toolbar: '#363636',
    contrast: '#ffffff',
  },
  border: {
    main: '#c8c8cc',
    lighter: '#c8c8cc',
  },
  token: {
    black: '#70758a',
    green: '#008040',
    brightGreen: '#407a0f',
    pink: '#d040a0',
    red: '#c82020',
    brightRed: '#b72840',
    yellow: '#b8860b',
    brightYellow: '#a05c22',
    blue: '#2648a8',
    magenta: '#5a4eca',
    teal: '#146a89',
    purple: '#9b6cff',
  },
  diagnostic: {
    error: '#c12a2a',
    secondaryError: '#b01011',
    warning: '#9f5f2e',
    info: '#2f62c8',
  },
  scm: {
    added: '#349f55',
    deleted: '#b43c3c',
    modified: '#c07a4a',
    untracked: '#007100',
    ignored: '#8f8f96',
    blame: '#9ea3b5',
    // VSCode mixes editor foreground with scm badge foreground so there might be contrast issue.
    // See -> https://github.com/microsoft/vscode/issues/308796
    defaultBadgeBackground: '#a8a8a8',
  },
}
