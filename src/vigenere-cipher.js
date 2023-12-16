const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Message and key are required");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const charCode = char.charCodeAt(0);
        const shift = key.charCodeAt(j % key.length) - 65; // 65 is the char code for 'A'

        if (this.isDirect) {
          result += String.fromCharCode(((charCode + shift - 65) % 26) + 65);
        } else {
          result += String.fromCharCode(
            ((charCode - shift - 65 + 26) % 26) + 65
          );
        }

        j++;
      } else {
        result += char;
      }
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Encrypted message and key are required");
    }

    return this.encrypt(encryptedMessage, key); // Decryption is the same as encryption in Vigenere cipher
  }
}

module.exports = {
  VigenereCipheringMachine,
};
