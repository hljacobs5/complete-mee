import fs from 'fs';

const Node = require('../lib/Node');

class Trie {
  constructor(data) {
    this.root = new Node;
    // this.suggestWord = [];
    this.count = 0;
  }

  insert(data) {
    let letters = [...data.toLowerCase()];
    let currentNode = this.root;

    letters.forEach((letter) => {
      // console.log(JSON.stringify(currentNode.children[letter], null, 4))
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }

      currentNode = currentNode.children[letter];
    });

      if(!currentNode.isWord) {
        this.count += 1;
        currentNode.isWord = true;
      }
  }
}

module.exports = Trie;