import fs from 'fs';

const Node = require('../lib/Node');

class Trie {
  constructor(data) {
    this.root = new Node;
    // this.suggestWord = [];
    this.count = 0;
  }
}

module.exports = Trie;