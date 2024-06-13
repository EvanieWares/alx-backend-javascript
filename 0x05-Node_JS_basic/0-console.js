
/**
 * This function displays a message to the STDOUT.
 *
 * @param {String} msg - The message to be displayed
 * @author Chisomo Psyelera <https://github.com/EvanieWares>
 */
const displayMessage = (msg) => process.stdout.write(msg + '\n');

module.exports = displayMessage;
