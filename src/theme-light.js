import { manicLightColors as colors } from './colors-light.js'
import { hexWithAlpha } from './utils.js'

export const manicLightTheme = {
  name: 'Manic By Day',
  $schema: 'vscode://schemas/color-theme',
  type: 'light',
  colors: {
    'actionBar.toggledBackground': '#dddddd',
    'activityBar.activeBorder': colors.transparent,
    'activityBar.background': colors.background.sideBar,
    'activityBar.border': colors.border.main,
    'activityBar.foreground': colors.foreground.toolbar,
    'activityBar.inactiveForeground': hexWithAlpha(colors.foreground.toolbar, 0.6),
    'activityBarBadge.background': colors.accent,
    'activityBarBadge.foreground': colors.foreground.contrast,
    'badge.background': colors.accent,
    'badge.foreground': colors.foreground.contrast,
    'button.background': colors.accent,
    'button.border': colors.border.lighter,
    'button.foreground': colors.foreground.contrast,
    'button.secondaryBackground': colors.background.toolbar,
    'button.secondaryForeground': colors.foreground.toolbar,
    'chat.slashCommandBackground': '#d2ecff',
    'chat.slashCommandForeground': '#306ca2',
    'checkbox.background': '#f8f8f8',
    'checkbox.border': '#cecece',
    'commandCenter.border': colors.border.lighter,
    'debugToolBar.background': colors.background.sideBar,
    descriptionForeground: '#3b3b3b',
    'diffEditor.unchangedRegionBackground': colors.background.sideBar,
    'diffEditor.unchangedRegionShadow': colors.transparent,
    'dropdown.background': '#ffffff',
    'dropdown.border': '#cecece',
    'dropdown.foreground': colors.foreground.toolbar,
    'dropdown.listBackground': '#ffffff',
    'editor.background': colors.background.editor,
    'editor.findMatchBackground': '#9e6a03',
    'editor.foreground': colors.foreground.editor,
    'editor.inactiveSelectionBackground': '#e5ebf1',
    'editor.lineHighlightBackground': hexWithAlpha(colors.accent, 0.05),
    'editor.selectionHighlightBackground': '#add6ff80',
    'editorGroup.border': colors.border.main,
    'editorGroupHeader.tabsBackground': colors.background.sideBar,
    'editorGroupHeader.tabsBorder': colors.border.main,
    'editorGutter.addedBackground': '#2ea043',
    'editorGutter.deletedBackground': '#f85149',
    'editorGutter.modifiedBackground': '#005fb8',
    'editorIndentGuide.activeBackground1': '#939393',
    'editorIndentGuide.background1': '#d3d3d3',
    'editorLineNumber.activeForeground': colors.foreground.toolbar,
    'editorLineNumber.foreground': hexWithAlpha(colors.foreground.toolbar, 0.4),
    'editorOverviewRuler.border': colors.border.main,
    'editorRuler.foreground': hexWithAlpha(colors.border.main, 0.5),
    'editorWidget.border': colors.border.main,
    'editorSuggestWidget.background': colors.background.sideBar,
    'editorSuggestWidget.focusHighlightForeground': colors.foreground.contrast,
    'editorSuggestWidget.selectedBackground': colors.accent,
    'editorSuggestWidget.selectedForeground': colors.foreground.contrast,
    'editorSuggestWidget.selectedIconForeground': colors.foreground.contrast,
    'editorWidget.background': colors.background.sideBar,
    errorForeground: '#f85149',
    focusBorder: hexWithAlpha(colors.accent, 0.6),
    foreground: colors.foreground.toolbar,
    'icon.foreground': colors.foreground.toolbar,
    'input.background': colors.background.input,
    'input.border': colors.border.main,
    'input.foreground': colors.foreground.toolbar,
    'input.placeholderForeground': hexWithAlpha(colors.foreground.toolbar, 0.6),
    'inputOption.activeBackground': hexWithAlpha(colors.accent, 0.2),
    'inputOption.activeBorder': hexWithAlpha(colors.accent, 0.3),
    'keybindingLabel.foreground': colors.foreground.toolbar,
    'list.activeSelectionBackground': hexWithAlpha(colors.accent, 0.1),
    'list.activeSelectionIconForeground': colors.foreground.editor,
    'list.hoverBackground': hexWithAlpha(colors.accent, 0.1),
    'list.focusHighlightForeground': colors.foreground.contrast,
    'list.highlightForeground': colors.accent,
    'list.dropBackground': '#383b3d',
    'menu.background': colors.background.sideBar,
    'menu.border': colors.border.main,
    'menu.foreground': colors.foreground.toolbar,
    'menu.selectionBackground': colors.accent,
    'menu.selectionForeground': colors.foreground.contrast,
    'menu.separatorBackground': hexWithAlpha(colors.border.main, 0.6),
    'multiDiffEditor.headerBackground': colors.background.sideBar,
    'notificationCenterHeader.background': colors.background.sideBar,
    'notificationCenterHeader.foreground': colors.foreground.toolbar,
    'notifications.background': colors.background.sideBar,
    'notifications.border': colors.border.main,
    'notifications.foreground': colors.foreground.toolbar,
    'panel.background': colors.background.editor,
    'panel.border': colors.border.main,
    'panelInput.border': colors.border.main,
    'panelTitle.activeBorder': colors.accent,
    'panelTitle.activeForeground': colors.foreground.toolbar,
    'panelTitle.inactiveForeground': hexWithAlpha(colors.foreground.toolbar, 0.6),
    'peekView.border': colors.border.lighter,
    'peekViewEditor.background': colors.background.editor,
    'peekViewEditor.matchHighlightBackground': '#bb800966',
    'peekViewResult.background': colors.background.editor,
    'peekViewResult.matchHighlightBackground': '#bb800966',
    'peekViewTitle.background': colors.background.sideBar,
    'pickerGroup.border': colors.border.main,
    'ports.iconRunningProcessForeground': '#369432',
    'progressBar.background': colors.accent,
    'quickInput.background': colors.background.sideBar,
    'quickInput.foreground': colors.foreground.toolbar,
    'quickInputList.focusBackground': colors.accent,
    'quickInputList.focusForeground': colors.foreground.contrast,
    'quickInputList.focusIconForeground': colors.foreground.contrast,
    'settings.dropdownBackground': colors.background.input,
    'settings.dropdownBorder': colors.border.main,
    'settings.headerForeground': colors.foreground.editor,
    'settings.modifiedItemIndicator': '#bb800966',
    'sideBar.background': colors.background.sideBar,
    'sideBar.border': colors.border.main,
    'sideBar.foreground': colors.foreground.toolbar,
    'sideBarSectionHeader.background': colors.background.sideBar,
    'sideBarSectionHeader.border': colors.border.main,
    'sideBarSectionHeader.foreground': colors.foreground.toolbar,
    'sideBarTitle.foreground': colors.foreground.toolbar,
    'statusBar.background': colors.background.toolbar,
    'statusBar.border': colors.border.lighter,
    'statusBar.debuggingBackground': colors.background.toolbar,
    'statusBar.debuggingForeground': colors.foreground.toolbar,
    'statusBar.focusBorder': hexWithAlpha(colors.accent, 0.6),
    'statusBar.foreground': colors.foreground.toolbar,
    'statusBar.noFolderBackground': colors.background.toolbar,
    'statusBarItem.focusBorder': hexWithAlpha(colors.accent, 0.6),
    'statusBarItem.prominentBackground': '#6e768166',
    'statusBarItem.remoteBackground': colors.transparent,
    'statusBarItem.remoteForeground': colors.foreground.toolbar,
    'tab.activeBackground': colors.background.editor,
    'tab.activeBorder': colors.background.editor,
    'tab.activeBorderTop': colors.transparent,
    'tab.activeForeground': colors.foreground.editor,
    'tab.border': colors.border.main,
    'tab.hoverBackground': hexWithAlpha(colors.background.editor, 0.7),
    'tab.inactiveBackground': colors.background.sideBar,
    'tab.inactiveForeground': hexWithAlpha(colors.foreground.editor, 0.6),
    'tab.lastPinnedBorder': colors.border.main,
    'tab.selectedBackground': '#ffffffa5',
    'tab.selectedBorderTop': '#68a3da',
    'tab.selectedForeground': '#333333b3',
    'tab.unfocusedActiveBorder': colors.background.editor,
    'tab.unfocusedActiveBorderTop': colors.transparent,
    'tab.unfocusedHoverBackground': hexWithAlpha(colors.background.editor, 0.7),
    'terminal.foreground': colors.foreground.toolbar,
    'terminal.ansiBlack': colors.tokenPalette.black,
    'terminal.ansiBlue': colors.tokenPalette.blue,
    'terminal.ansiBrightBlack': colors.tokenPalette.black,
    'terminal.ansiBrightBlue': colors.tokenPalette.blue,
    'terminal.ansiBrightCyan': colors.tokenPalette.teal,
    'terminal.ansiBrightGreen': colors.tokenPalette.brightGreen,
    'terminal.ansiBrightMagenta': colors.tokenPalette.magenta,
    'terminal.ansiBrightRed': colors.tokenPalette.brightRed,
    'terminal.ansiBrightWhite': colors.foreground.editor,
    'terminal.ansiBrightYellow': colors.tokenPalette.brightYellow,
    'terminal.ansiCyan': colors.tokenPalette.teal,
    'terminal.ansiGreen': colors.tokenPalette.green,
    'terminal.ansiMagenta': colors.tokenPalette.magenta,
    'terminal.ansiRed': colors.tokenPalette.red,
    'terminal.ansiWhite': colors.foreground.editor,
    'terminal.ansiYellow': colors.tokenPalette.yellow,
    'terminal.inactiveSelectionBackground': '#e5ebf1',
    'terminal.tab.activeBorder': colors.accent,
    'textBlockQuote.background': colors.border.main,
    'textBlockQuote.border': '#e5e5e5',
    'textCodeBlock.background': colors.border.main,
    'textLink.activeForeground': '#005fb8',
    'textLink.foreground': '#005fb8',
    'textPreformat.background': '#0000001f',
    'textPreformat.foreground': '#3b3b3b',
    'textSeparator.foreground': '#21262d',
    'titleBar.activeBackground': colors.background.toolbar,
    'titleBar.activeForeground': colors.foreground.toolbar,
    'titleBar.border': colors.border.lighter,
    'titleBar.inactiveBackground': colors.background.toolbar,
    'titleBar.inactiveForeground': hexWithAlpha(colors.foreground.toolbar, 0.6),
    'welcomePage.progress.foreground': colors.accent,
    'welcomePage.tileBackground': colors.border.main,
    'widget.border': colors.border.main,
  },
  tokenColors: [
    {
      scope: [
        'meta.embedded',
        'source.groovy.embedded',
        'string meta.image.inline.markdown',
        'variable.legacy.builtin.python',
      ],
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'header',
      settings: {
        foreground: '#000080',
      },
    },
    {
      scope: 'comment',
      settings: {
        foreground: colors.tokenPalette.black,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'storage.type.class.jsdoc',
        'entity.name.type.instance.jsdoc',
        'variable.other.jsdoc',
      ],
      settings: {
        fontStyle: '',
      },
    },
    {
      scope: 'constant.language',
      settings: {
        foreground: colors.tokenPalette.magenta,
      },
    },
    {
      scope: [
        'constant.numeric',
        'variable.other.enummember',
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: {
        foreground: colors.tokenPalette.magenta,
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: '#811F3F',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: colors.tokenPalette.brightRed,
      },
    },
    {
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
      ],
      settings: {
        foreground: colors.tokenPalette.yellow,
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.tokenPalette.yellow,
      },
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'source.css entity.other.attribute-name.class',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'entity.other.attribute-name.parent.less',
        'source.css entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: {
        foreground: colors.tokenPalette.yellow,
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: colors.tokenPalette.red,
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        foreground: colors.tokenPalette.teal,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.tokenPalette.teal,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: {
        foreground: '#0451A5',
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#0451A5',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: '#800000',
      },
    },
    {
      scope: [
        'meta.preprocessor',
        'entity.name.function.preprocessor',
      ],
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: colors.tokenPalette.blue,
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: colors.tokenPalette.brightRed,
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: colors.tokenPalette.teal,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'storage.modifier',
        'keyword.operator.noexcept',
      ],
      settings: {
        foreground: colors.tokenPalette.pink,
      },
    },
    {
      scope: [
        'string',
        'meta.embedded.assembly',
      ],
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: colors.tokenPalette.brightRed,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: [
        'meta.template.expression',
      ],
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: [
        'support.type.vendored.property-name',
        'support.type.property-name',
        'source.css variable',
        'source.coffee.embedded',
      ],
      settings: {
        foreground: colors.tokenPalette.blue,
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: [
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: [
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: colors.tokenPalette.blue,
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: [
        'storage.modifier.import.java',
        'variable.language.wildcard.java',
        'storage.modifier.package.java',
      ],
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: colors.tokenPalette.teal,
      },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'support.constant.handlebars',
        'source.powershell variable.other.member',
        'entity.name.operator.custom-literal',
      ],
      settings: {
        foreground: colors.tokenPalette.brightYellow,
      },
    },
    {
      scope: [
        'support.class',
        'support.type',
        'entity.name.type',
        'entity.name.namespace',
        'entity.other.attribute',
        'entity.name.scope-resolution',
        'entity.name.class',
        'storage.type.numeric.go',
        'storage.type.byte.go',
        'storage.type.boolean.go',
        'storage.type.string.go',
        'storage.type.uintptr.go',
        'storage.type.error.go',
        'storage.type.rune.go',
        'storage.type.cs',
        'storage.type.generic.cs',
        'storage.type.modifier.cs',
        'storage.type.variable.cs',
        'storage.type.annotation.java',
        'storage.type.generic.java',
        'storage.type.java',
        'storage.type.object.array.java',
        'storage.type.primitive.array.java',
        'storage.type.primitive.java',
        'storage.type.token.java',
        'storage.type.groovy',
        'storage.type.annotation.groovy',
        'storage.type.parameters.groovy',
        'storage.type.generic.groovy',
        'storage.type.object.array.groovy',
        'storage.type.primitive.array.groovy',
        'storage.type.primitive.groovy',
      ],
      settings: {
        foreground: colors.tokenPalette.green,
      },
    },
    {
      scope: [
        'meta.type.cast.expr',
        'meta.type.new.expr',
        'support.constant.math',
        'support.constant.dom',
        'support.constant.json',
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: colors.tokenPalette.green,
      },
    },
    {
      scope: [
        'keyword.control',
        'source.cpp keyword.operator.new',
        'keyword.operator.delete',
        'keyword.other.using',
        'keyword.other.directive.using',
        'keyword.other.operator',
        'entity.name.operator',
      ],
      settings: {
        foreground: colors.tokenPalette.pink,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'variable',
        'meta.definition.variable.name',
        'support.variable',
        'entity.name.variable',
        'constant.other.placeholder',
      ],
      settings: {
        foreground: colors.tokenPalette.blue,
      },
    },
    {
      scope: [
        'variable.other.constant',
        'variable.other.enummember',
      ],
      settings: {
        foreground: colors.tokenPalette.magenta,
      },
    },
    {
      scope: 'variable.parameter',
      settings: {
        foreground: colors.tokenPalette.orange,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.object-literal.key',
      ],
      settings: {
        foreground: colors.tokenPalette.blue,
      },
    },
    {
      scope: [
        'support.constant.property-value',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'constant.other.color.rgb-value',
        'constant.other.rgb-value',
        'support.constant.color',
      ],
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: [
        'punctuation.definition.group.regexp',
        'punctuation.definition.group.assertion.regexp',
        'punctuation.definition.character-class.regexp',
        'punctuation.character.set.begin.regexp',
        'punctuation.character.set.end.regexp',
        'keyword.operator.negation.regexp',
        'support.other.parenthesis.regexp',
      ],
      settings: {
        foreground: colors.tokenPalette.brightGreen,
      },
    },
    {
      scope: [
        'constant.character.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'constant.other.character-class.regexp',
        'constant.character.set.regexp',
      ],
      settings: {
        foreground: colors.tokenPalette.brightRed,
      },
    },
    {
      scope: [
        'keyword.operator.or.regexp',
        'keyword.control.anchor.regexp',
      ],
      settings: {
        foreground: colors.tokenPalette.green,
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: colors.tokenPalette.yellow,
      },
    },
    {
      scope: [
        'constant.character',
        'constant.other.option',
      ],
      settings: {
        foreground: colors.tokenPalette.magenta,
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: colors.tokenPalette.yellow,
      },
    },
    {
      scope: 'entity.name.label',
      settings: {
        foreground: '#000000',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#316BCD',
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: '#CD9731',
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors.tokenPalette.red,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#800080',
      },
    },
  ],
  semanticHighlighting: true,
}