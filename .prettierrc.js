module.exports = {
    printWidth: 100, //单行最多的字符，默认80
    tabWidth: 2, // tab缩进大小,默认为2
    semi: false, //在语句结尾打印分号
    singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    bracketSpacing: true, //打印对象文字中括号之间的空格
    jsxBracketSameLine: true,
    arrowParens: 'avoid', 
    //"always" - Always include parens. Example: (x) => x
    //"avoid" - Omit parens when possible. Example: x => x
}