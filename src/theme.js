import { manicColors as colors } from './colors.js'
import { hexWithAlpha } from './utils.js'

export const manicTheme = {
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
    'checkbox.background': '#313131',
    'checkbox.border': '#3c3c3c',
    'commandCenter.border': colors.border.lighter,
    'debugToolBar.background': colors.background.sideBar,
    descriptionForeground: '#9d9d9d',
    'diffEditor.unchangedRegionBackground': colors.background.sideBar,
    'diffEditor.unchangedRegionShadow': colors.transparent,
    'dropdown.background': '#313131',
    'dropdown.border': '#3c3c3c',
    'dropdown.foreground': colors.foreground.toolbar,
    'dropdown.listBackground': '#1f1f1f',
    'editor.background': colors.background.editor,
    'editor.findMatchBackground': '#9e6a03',
    'editor.foreground': colors.foreground.editor,
    'editor.inactiveSelectionBackground': '#3a3d41',
    'editor.lineHighlightBackground': hexWithAlpha(colors.accent, 0.05),
    'editor.selectionHighlightBackground': '#add6ff26',
    'editorGroup.border': colors.border.main,
    'editorGroupHeader.tabsBackground': colors.background.sideBar,
    'editorGroupHeader.tabsBorder': colors.border.main,
    'editorGutter.addedBackground': '#2ea043',
    'editorGutter.deletedBackground': '#f85149',
    'editorGutter.modifiedBackground': '#0078d4',
    'editorIndentGuide.activeBackground1': '#707070',
    'editorIndentGuide.background1': '#404040',
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
    'editorWidget.background': colors.background.widget,
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
    'tab.selectedBackground': '#222222',
    'tab.selectedBorderTop': '#6caddf',
    'tab.selectedForeground': '#ffffffa0',
    'tab.unfocusedActiveBorder': colors.background.editor,
    'tab.unfocusedActiveBorderTop': colors.transparent,
    'tab.unfocusedHoverBackground': hexWithAlpha(colors.background.editor, 0.7),
    'terminal.foreground': colors.foreground.toolbar,
    'terminal.inactiveSelectionBackground': '#3a3d41',
    'terminal.tab.activeBorder': colors.accent,
    'textBlockQuote.background': colors.border.main,
    'textBlockQuote.border': '#616161',
    'textCodeBlock.background': colors.border.main,
    'textLink.activeForeground': '#4daafc',
    'textLink.foreground': '#4daafc',
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
        foreground: colors.token.comment,
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
        foreground: '#569CD6',
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
        foreground: colors.token.numeric,
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
        foreground: colors.token.tag,
      },
    },
    {
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
      ],
      settings: {
        foreground: '#D7BA7D',
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.token.attribute,
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
        foreground: colors.token.attribute,
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: colors.token.invalid,
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
        foreground: '#569CD6',
        fontStyle: 'bold',
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: '#569CD6',
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
        foreground: colors.token.markup,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: colors.token.string,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: '#569CD6',
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
        foreground: colors.token.string,
      },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: '#808080',
      },
    },
    {
      scope: [
        'meta.preprocessor',
        'entity.name.function.preprocessor',
      ],
      settings: {
        foreground: colors.token.meta,
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: colors.token.string,
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: colors.token.meta,
      },
    },
    {
      scope: 'meta.structure.dictionary.key.python',
      settings: {
        foreground: '#9CDCFE',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: '#569CD6',
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: colors.token.storage,
      },
    },
    {
      scope: 'storage.type',
      settings: {
        foreground: colors.token.storageType,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'storage.modifier',
        'keyword.operator.noexcept',
      ],
      settings: {
        foreground: colors.token.storage,
      },
    },
    {
      scope: [
        'string',
        'meta.embedded.assembly',
      ],
      settings: {
        foreground: colors.token.string,
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: colors.token.string,
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: colors.token.string,
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: '#D16969',
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: '#569CD6',
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
        foreground: colors.token.property,
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: '#569CD6',
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: '#569CD6',
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
        foreground: '#569CD6',
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: '#B5CEA8',
      },
    },
    {
      scope: [
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: '#569CD6',
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: '#9CDCFE',
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: '#B5CEA8',
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
        foreground: '#569CD6',
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
        foreground: colors.token.function,
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
        foreground: colors.token.class,
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
        foreground: colors.token.class,
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
        foreground: colors.token.keyword,
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
        foreground: colors.token.variable,
      },
    },
    {
      scope: [
        'variable.other.constant',
        'variable.other.enummember',
      ],
      settings: {
        foreground: colors.token.constant,
      },
    },
    {
      scope: 'variable.parameter',
      settings: {
        foreground: colors.token.parameter,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'meta.object-literal.key',
      ],
      settings: {
        foreground: '#9CDCFE',
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
        foreground: colors.token.string,
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
        foreground: colors.token.string,
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
        foreground: '#D16969',
      },
    },
    {
      scope: [
        'keyword.operator.or.regexp',
        'keyword.control.anchor.regexp',
      ],
      settings: {
        foreground: '#DCDCAA',
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: '#D7BA7D',
      },
    },
    {
      scope: [
        'constant.character',
        'constant.other.option',
      ],
      settings: {
        foreground: colors.token.constant,
      },
    },
    {
      scope: 'constant.character.escape',
      settings: {
        foreground: '#D7BA7D',
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
        foreground: colors.token.invalid,
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
