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
    // console.log(JSON.stringify(letters, null, 4))
    let currentNode = this.root;
    // console.log(JSON.stringify(currentNode, null, 4))


    letters.forEach((letter) => {
      // console.log(JSON.stringify(currentNode.children[letter], null, 4))
      if (!currentNode.children[letter]) {
       console.log(JSON.stringify(letter, null, 4))

        currentNode.children[letter] = new Node(letter);
      }

      currentNode = currentNode.children[letter];
    });

      if(!currentNode.isWord) {
        this.count += 1;
        currentNode.isWord = true;
    }
  }

  count() {
    this.counter++;
  }

  suggest(data) {
    let suggestions = [];
    let currentNode = this.root;
    let prefixLetters = [...data.toLowerCase()];

    prefixLetters.forEach(letter => {
      currentNode = currentNode.children[letter];
    });

    const search = currentNode => {
      if (currentNode.completed) {
        suggestions.push(currentNode.completed)
      }

      let childrenKeys = Object.keys(currentNode.children)

      childrenKeys.forEach(nodeKey => {
        search(currentNode.children[nodeKey])
      });
    };

    search(currentNode);
    return suggestions
  }

  find() {
    let currentNode = this.root;
    let letters = [...data];

    while(letters.length) {
     let letter = letters.shift().toLowerCase();
     if (currentNode.children[letter]) {
      currentNode = currentNode.children[letter]
    } else {
      return null
    }
   }
   
   return currentNode;
  }

  delete(data) {

  }
}

module.exports = Trie;