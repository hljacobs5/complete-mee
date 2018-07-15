import fs from 'fs';
const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

const Node = require('../lib/Node');

class Trie {
  constructor(data) {
    this.root = new Node;
    this.count = 0;
  }

  insert(data) {
    let letters = [...data.toLowerCase()];
    let currentNode = this.root;

    letters.forEach((letter) => {

      if (!currentNode.children[letter]) {

        currentNode.children[letter] = new Node(letter);
      }
      
      currentNode = currentNode.children[letter];
    });

      if(!currentNode.completed) {
        this.count += 1;
        currentNode.completed = true;
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
      let shouldDelete = false;
      if (currentNode.completed) {
        shouldDelete = true;
      }

      let childrenKeys = Object.keys(currentNode.children)

      childrenKeys.forEach(nodeKey => {
        search(currentNode.children[nodeKey])
      });
    };

    search(currentNode);
    return suggestions
  }

  populate(dictionary) {
      dictionary.forEach(word => {
          this.insert(word)
      });
    }

  find(data) {
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
    let currentNode = this.root;
    let letters = [...data.toLowerCase()];
    let previousNode = this.root;
    let key;

    letters.forEach(letter => {
      previousNode = currentNode //first iteration parent becomes the root
      currentNode = currentNode.children[letter];
      key = letter;
    });
    console.log(currentNode.completed)
    if (currentNode.completed) {
      currentNode.completed = null;
      this.count--;
    }

    if (!Object.keys(currentNode.children).length) {
      delete previousNode.children[key] 
    }
  }
}

module.exports = Trie;