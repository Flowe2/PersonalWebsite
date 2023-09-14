module.exports = {
    $schema: 'https://json.schemastore.org/prettierrc',
    semi: true, // 句尾添加分号
    tabWidth: 4, // tab宽度
    useTabs: false, // 缩进不使用tab，使用空格
    trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
    printWidth: 120, // 超过最大值换行
    singleQuote: true, // 使用单引号代替双引号
    arrowParens: 'avoid', // 箭头函数参数只有一个时是否省略小括号。avoid：省略括号
    bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
    endOfLine: 'auto', // 结尾是 \n \r \n\r auto
    eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
    htmlWhitespaceSensitivity: 'ignore',
    jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
    jsxSingleQuote: false // 在jsx中使用单引号代替双引号
    // "disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
};
