import { manicColors as colors } from './colors-pale.js'
import { hexWithAlpha } from './utils.js'

export const manicPaleTheme = {
  name: 'Manic',
  $schema: 'vscode://schemas/color-theme',
  type: 'dark',
  colors: {
    'actionBar.toggledBackground': '#383a49',
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
    'chat.slashCommandBackground': '#34414b',
    'chat.slashCommandForeground': '#40a6ff',
    'checkbox.background': colors.background.input,
    'checkbox.border': colors.border.main,
    'commandCenter.border': colors.border.lighter,
    'commandCenter.background': colors.background.commandCenter,
    'debugToolBar.background': colors.background.sideBar,
    descriptionForeground: '#9d9d9d',
    'dropdown.background': colors.background.input,
    'dropdown.border': colors.border.main,
    'dropdown.foreground': colors.foreground.toolbar,
    'dropdown.listBackground': colors.background.sideBar,
    'editor.background': colors.background.editor,
    'editor.findMatchBackground': hexWithAlpha(colors.token.yellow, 0.3),
    'editor.findMatchHighlightBackground': hexWithAlpha(colors.token.yellow, 0.2),
    'editor.findRangeHighlightBackground': hexWithAlpha(colors.token.yellow, 0.1),
    'editor.foreground': colors.foreground.editor,
    'editor.inactiveSelectionBackground': hexWithAlpha(colors.token.magenta, 0.125),
    'editor.lineHighlightBackground': hexWithAlpha(colors.accent, 0.05),
    'editor.selectionBackground': hexWithAlpha(colors.token.magenta, 0.2),
    'editor.selectionHighlightBackground': hexWithAlpha(colors.token.magenta, 0.095),
    'editor.wordHighlightBackground': hexWithAlpha(colors.token.blue, 0.125),
    'editor.wordHighlightStrongBackground': hexWithAlpha(colors.token.green, 0.125),
    'editor.wordHighlightTextBackground': hexWithAlpha(colors.token.magenta, 0.08),
    'editorBracketMatch.background': hexWithAlpha(colors.token.blue, 0.25),
    'editorBracketMatch.border': colors.transparent,
    'editorCursor.foreground': colors.foreground.editor,
    'editorGhostText.border': colors.transparent,
    'editorGhostText.background': colors.transparent,
    'editorGhostText.foreground': hexWithAlpha(colors.token.black, 0.6),
    'editorGroup.border': colors.border.main,
    'editorGroupHeader.tabsBackground': colors.background.sideBar,
    'editorGroupHeader.tabsBorder': colors.border.main,
    'editorIndentGuide.activeBackground1': hexWithAlpha(colors.token.black, 0.7),
    'editorIndentGuide.background1': hexWithAlpha(colors.token.black, 0.3),
    'editorLineNumber.activeForeground': colors.foreground.toolbar,
    'editorLineNumber.foreground': hexWithAlpha(colors.token.black, 0.6),
    'editorOverviewRuler.border': colors.border.main,
    'editorRuler.foreground': hexWithAlpha(colors.border.main, 0.5),
    'editorWhitespace.foreground': hexWithAlpha(colors.foreground.editor, 0.18),
    'editorWidget.border': colors.border.main,
    'editorLink.activeForeground': colors.token.purple,
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
    'list.activeSelectionBackground': hexWithAlpha(colors.accent, 0.15),
    'list.activeSelectionForeground': '#ffffff',
    'list.activeSelectionIconForeground': colors.foreground.editor,
    'list.inactiveSelectionBackground': hexWithAlpha(colors.accent, 0.1),
    'list.hoverBackground': hexWithAlpha(colors.accent, 0.15),
    'list.focusHighlightForeground': colors.foreground.contrast,
    'list.highlightForeground': colors.accent,
    'list.dropBackground': hexWithAlpha(colors.accent, 0.1),
    'menu.background': colors.background.sideBar,
    'menu.border': colors.border.main,
    'menu.foreground': colors.foreground.toolbar,
    'menu.selectionBackground': colors.accent,
    'menu.selectionForeground': colors.foreground.contrast,
    'menu.separatorBackground': hexWithAlpha(colors.border.main, 0.6),
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
    'peekViewEditor.matchHighlightBackground': hexWithAlpha(colors.token.magenta, 0.2),
    'peekViewResult.background': colors.background.editor,
    'peekViewResult.matchHighlightBackground': hexWithAlpha(colors.token.magenta, 0.3),
    'peekViewResult.selectionBackground': hexWithAlpha(colors.token.magenta, 0.1),
    'peekViewTitle.background': colors.background.sideBar,
    'pickerGroup.border': colors.border.main,
    'pickerGroup.foreground': colors.token.blue,
    'ports.iconRunningProcessForeground': '#369432',
    'progressBar.background': colors.accent,
    'quickInput.background': colors.background.sideBar,
    'quickInput.foreground': colors.foreground.toolbar,
    'quickInputList.focusBackground': colors.accent,
    'quickInputList.focusForeground': colors.foreground.contrast,
    'quickInputList.focusIconForeground': colors.foreground.contrast,
    'selection.background': hexWithAlpha(colors.token.magenta, 0.5),
    'settings.dropdownBackground': colors.background.input,
    'settings.dropdownBorder': colors.border.main,
    'settings.headerForeground': colors.foreground.editor,
    'settings.modifiedItemIndicator': colors.token.yellow,
    'sideBar.background': colors.background.sideBar,
    'sideBar.border': colors.border.main,
    'sideBar.foreground': colors.foreground.toolbar,
    'sideBarSectionHeader.background': colors.background.sideBar,
    'sideBarSectionHeader.border': colors.border.main,
    'sideBarSectionHeader.foreground': colors.foreground.toolbar,
    'sideBarTitle.foreground': colors.foreground.toolbar,
    'scrollbar.shadow': colors.transparent,
    'statusBar.background': colors.background.toolbar,
    'statusBar.border': colors.border.lighter,
    'statusBar.debuggingBackground': colors.background.toolbar,
    'statusBar.debuggingForeground': colors.foreground.toolbar,
    'statusBar.focusBorder': hexWithAlpha(colors.accent, 0.6),
    'statusBar.foreground': colors.foreground.toolbar,
    'statusBar.noFolderBackground': colors.background.toolbar,
    'statusBarItem.focusBorder': hexWithAlpha(colors.accent, 0.6),
    'statusBarItem.prominentBackground': '#6e768166',
    'statusBarItem.hoverBackground': hexWithAlpha(colors.accent, 0.1),
    'statusBarItem.compactHoverBackground': hexWithAlpha(colors.accent, 0.15),
    'statusBarItem.remoteBackground': colors.transparent,
    'statusBarItem.remoteForeground': colors.foreground.toolbar,
    'symbolIcon.arrayForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.booleanForeground': hexWithAlpha(colors.token.magenta, 0.8),
    'symbolIcon.classForeground': hexWithAlpha(colors.token.green, 0.8),
    'symbolIcon.colorForeground': hexWithAlpha(colors.token.brightGreen, 0.8),
    'symbolIcon.constantForeground': hexWithAlpha(colors.token.magenta, 0.8),
    'symbolIcon.constructorForeground': hexWithAlpha(colors.token.teal, 0.8),
    'symbolIcon.enumeratorForeground': hexWithAlpha(colors.token.purple, 0.8),
    'symbolIcon.enumeratorMemberForeground': hexWithAlpha(colors.token.purple, 0.8),
    'symbolIcon.eventForeground': hexWithAlpha(colors.token.brightYellow, 0.8),
    'symbolIcon.fieldForeground': hexWithAlpha(colors.token.blue, 0.8),
    'symbolIcon.fileForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.folderForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.functionForeground': hexWithAlpha(colors.token.brightYellow, 0.8),
    'symbolIcon.interfaceForeground': hexWithAlpha(colors.token.green, 0.8),
    'symbolIcon.keyForeground': hexWithAlpha(colors.token.blue, 0.8),
    'symbolIcon.keywordForeground': hexWithAlpha(colors.token.blue, 0.8),
    'symbolIcon.methodForeground': hexWithAlpha(colors.token.brightYellow, 0.8),
    'symbolIcon.moduleForeground': hexWithAlpha(colors.token.magenta, 0.8),
    'symbolIcon.namespaceForeground': hexWithAlpha(colors.token.teal, 0.8),
    'symbolIcon.nullForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.numberForeground': hexWithAlpha(colors.token.magenta, 0.8),
    'symbolIcon.objectForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.operatorForeground': hexWithAlpha(colors.token.teal, 0.8),
    'symbolIcon.packageForeground': hexWithAlpha(colors.token.black, 0.8),
    'symbolIcon.propertyForeground': hexWithAlpha(colors.token.blue, 0.8),
    'symbolIcon.referenceForeground': hexWithAlpha(colors.token.blue, 0.8),
    'symbolIcon.snippetForeground': hexWithAlpha(colors.token.yellow, 0.8),
    'symbolIcon.stringForeground': hexWithAlpha(colors.token.brightGreen, 0.8),
    'symbolIcon.structForeground': hexWithAlpha(colors.token.brightYellow, 0.8),
    'symbolIcon.textForeground': hexWithAlpha(colors.token.pink, 0.8),
    'symbolIcon.typeParameterForeground': hexWithAlpha(colors.token.green, 0.8),
    'symbolIcon.unitForeground': hexWithAlpha(colors.token.teal, 0.8),
    'symbolIcon.variableForeground': hexWithAlpha(colors.token.blue, 0.8),
    'tab.activeBackground': colors.background.editor,
    'tab.activeBorder': colors.background.editor,
    'tab.activeBorderTop': colors.transparent,
    'tab.activeForeground': colors.foreground.editor,
    'tab.border': colors.border.main,
    'tab.hoverBackground': hexWithAlpha(colors.background.editor, 0.7),
    'tab.inactiveBackground': colors.background.sideBar,
    'tab.inactiveForeground': hexWithAlpha(colors.foreground.editor, 0.6),
    'tab.lastPinnedBorder': colors.border.main,
    'tab.selectedBackground': '#222222',
    'tab.selectedBorderTop': '#6caddf',
    'tab.selectedForeground': '#ffffffa0',
    'tab.unfocusedActiveBorder': colors.background.editor,
    'tab.unfocusedActiveBorderTop': colors.transparent,
    'tab.unfocusedHoverBackground': hexWithAlpha(colors.background.editor, 0.7),
    'textBlockQuote.background': colors.border.main,
    'textBlockQuote.border': '#616161',
    'textCodeBlock.background': colors.border.main,
    'textLink.activeForeground': colors.token.pink,
    'textLink.foreground': colors.token.pink,
    'textPreformat.background': '#3c3c3c',
    'textPreformat.foreground': '#d0d0d0',
    'textSeparator.foreground': '#21262d',
    'titleBar.activeBackground': colors.background.toolbar,
    'titleBar.activeForeground': colors.foreground.toolbar,
    'titleBar.border': colors.border.lighter,
    'titleBar.inactiveBackground': colors.background.toolbar,
    'titleBar.inactiveForeground': hexWithAlpha(colors.foreground.toolbar, 0.6),
    'welcomePage.progress.foreground': colors.accent,
    'welcomePage.tileBackground': colors.border.main,
    'widget.border': colors.border.main,

    // List
    'list.errorForeground': colors.diagnostic.secondaryError,
    'list.warningForeground': colors.diagnostic.warning,

    // Errors & Warnings
    'editorError.foreground': colors.diagnostic.error,
    'editorWarning.foreground': colors.diagnostic.warning,
    'editorInfo.foreground': colors.diagnostic.info,

    // SCM
    'editorGutter.addedBackground': colors.scm.added,
    'editorGutter.deletedBackground': colors.scm.deleted,
    'editorGutter.modifiedBackground': colors.scm.modified,
    'diffEditor.unchangedRegionBackground': colors.background.sideBar,
    'diffEditor.unchangedRegionShadow': colors.transparent,
    'diffEditor.insertedTextBackground': hexWithAlpha('#9ccc2c', 0.15),
    'diffEditor.insertedLineBackground': hexWithAlpha('#9bb955', 0.2),
    'diffEditor.removedTextBackground': hexWithAlpha('#ff0000', 0.2),
    'diffEditor.removedLineBackground': hexWithAlpha('#ff0000', 0.2),
    'multiDiffEditor.headerBackground': colors.background.sideBar,
    'gitDecoration.addedResourceForeground': colors.scm.added,
    'gitDecoration.deletedResourceForeground': colors.scm.deleted,
    'gitDecoration.modifiedResourceForeground': colors.scm.modified,
    'gitDecoration.untrackedResourceForeground': colors.scm.untracked,
    'gitDecoration.ignoredResourceForeground': colors.scm.ignored,
    'editorGutter.addedBackground': colors.scm.added,
    'editorGutter.addedSecondaryBackground': hexWithAlpha(colors.scm.added, 0.35),
    'editorGutter.deletedBackground': colors.scm.deleted,
    'editorGutter.deletedSecondaryBackground': hexWithAlpha(colors.scm.deleted, 0.35),
    'editorGutter.modifiedBackground': colors.scm.modified,
    'editorGutter.modifiedSecondaryBackground': hexWithAlpha(colors.scm.modified, 0.35),
    'git.blame.editorDecorationForeground': colors.scm.blame,
    'scmGraph.foreground1': colors.token.blue,
    'scmGraph.foreground2': colors.token.pink,
    'scmGraph.foreground3': colors.token.brightYellow,
    'scmGraph.foreground4': colors.token.brightGreen,
    'scmGraph.foreground5': colors.token.brightRed,
    'scmGraph.historyItemHoverLabelForeground': colors.foreground.contrast,
    'scmGraph.historyItemRefColor': colors.token.purple,
    'scmGraph.historyItemRemoteRefColor': colors.token.teal,
    'scmGraph.historyItemBaseRefColor': colors.token.green,
    'scmGraph.historyItemHoverDefaultLabelForeground': colors.foreground.contrast,
    'scmGraph.historyItemHoverDefaultLabelBackground': colors.token.yellow,
    'scmGraph.historyItemRefColor': colors.token.magenta,

    // Terminal
    'terminal.foreground': colors.foreground.toolbar,
    'terminal.ansiBlack': colors.token.black,
    'terminal.ansiBlue': colors.token.blue,
    'terminal.ansiBrightBlack': colors.token.black,
    'terminal.ansiBrightBlue': colors.token.blue,
    'terminal.ansiBrightCyan': colors.token.teal,
    'terminal.ansiBrightGreen': colors.token.brightGreen,
    'terminal.ansiBrightMagenta': colors.token.magenta,
    'terminal.ansiBrightRed': colors.token.brightRed,
    'terminal.ansiBrightWhite': colors.foreground.editor,
    'terminal.ansiBrightYellow': colors.token.brightYellow,
    'terminal.ansiCyan': colors.token.teal,
    'terminal.ansiGreen': colors.token.brightGreen,
    'terminal.ansiMagenta': colors.token.magenta,
    'terminal.ansiRed': colors.token.brightRed,
    'terminal.ansiWhite': colors.foreground.editor,
    'terminal.ansiYellow': colors.token.brightYellow,
    'terminal.inactiveSelectionBackground': '#3a3d41',
    'terminal.tab.activeBorder': colors.accent,
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
        foreground: '#D4D4D4',
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
      scope: [
        'comment',
      ],
      settings: {
        foreground: colors.token.black,
      },
    },
    {
      scope: [
        'storage.type.class',
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
        foreground: colors.token.magenta,
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
        foreground: colors.token.magenta,
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: '#646695',
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: colors.token.brightRed,
      },
    },
    {
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
      ],
      settings: {
        foreground: colors.token.yellow,
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.token.yellow,
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
        foreground: colors.token.yellow,
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: colors.token.red,
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
        foreground: colors.token.teal,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.token.teal,
        fontStyle: 'bold',
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
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: {
        foreground: '#6A9955',
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: '#6796E6',
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: [
        'meta.preprocessor',
        'entity.name.function.preprocessor',
      ],
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: colors.token.blue,
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: colors.token.brightRed,
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: colors.token.teal,
        fontStyle: '',
      },
    },
    {
      scope: [
        'storage.modifier',
        'keyword.operator.noexcept',
      ],
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: [
        'string',
        'meta.embedded.assembly',
      ],
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: colors.token.brightGreen,
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: colors.token.brightRed,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: [
        'meta.template.expression',
      ],
      settings: {
        foreground: '#D4D4D4',
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
        foreground: colors.token.blue,
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: '#D4D4D4',
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
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: [
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: colors.token.blue,
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: colors.token.teal,
      },
    },
    {
      scope: [
        'storage.modifier.import.java',
        'variable.language.wildcard.java',
        'storage.modifier.package.java',
      ],
      settings: {
        foreground: '#D4D4D4',
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: colors.token.teal,
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
        foreground: colors.token.brightYellow,
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
        foreground: colors.token.green,
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
        foreground: colors.token.green,
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
        foreground: colors.token.pink,
        fontStyle: '',
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
        foreground: colors.token.blue,
      },
    },
    {
      scope: [
        'variable.other.constant',
        'variable.other.enummember',
      ],
      settings: {
        foreground: colors.token.magenta,
      },
    },
    {
      scope: [
        'meta.object-literal.key',
      ],
      settings: {
        foreground: colors.token.blue,
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
        foreground: colors.token.brightGreen,
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
        foreground: colors.token.brightGreen,
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
        foreground: colors.token.brightRed,
      },
    },
    {
      scope: [
        'keyword.operator.or.regexp',
        'keyword.control.anchor.regexp',
      ],
      settings: {
        foreground: colors.token.green,
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: colors.token.yellow,
      },
    },
    {
      scope: [
        'constant.character',
        'constant.other.option',
      ],
      settings: {
        foreground: colors.token.magenta,
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: colors.token.yellow,
      },
    },
    {
      scope: 'entity.name.label',
      settings: {
        foreground: '#C8C8C8',
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: '#6796E6',
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
        foreground: colors.token.red,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: '#B267E6',
      },
    },
  ],
  semanticHighlighting: true,
}
