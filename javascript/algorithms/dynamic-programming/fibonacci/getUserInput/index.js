const readline = require('readline-sync');

const message = `What integer do you want to now the fibonacci value?\n`;

module.exports = () => readline.question(message);
