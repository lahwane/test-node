import chalk from 'chalk'

console.log(chalk.blue.bgWhite.underline('Hello chalk'))

//* Combine styled and normal strings
console.log(chalk.blue.underline('Hello') + ' Chalk' + chalk.red('!'))

//* Compose multiple styles using the chainable API
console.log(chalk.yellow.bgRed.bold('Hello Chalk!'))

//* Pass in multiple arguments
console.log(chalk.blue('Hello', 'Chalk!', 'Foo', 'bar', 'biz', 'baz'))

//* Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('Chalk') + '!'))

//* Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
))
