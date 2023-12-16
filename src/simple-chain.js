const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    // If value is not specified, use "( )" as a link
    this.chain.push(value !== undefined ? String(value) : "( )");
    return this; // Return the chainMaker object to allow method chaining
  },

  removeLink(position) {
    // Check if position is a valid index
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = []; // Reset the chain if position is invalid
      throw new Error("Invalid position");
    }

    // Remove the link at the specified position
    this.chain.splice(position - 1, 1);
    return this; // Return the chainMaker object to allow method chaining
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Return the chainMaker object to allow method chaining
  },

  finishChain() {
    // Join the chain links into a string and reset the chain
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};
module.exports = {
  chainMaker,
};
