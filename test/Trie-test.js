import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

describe('trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should exist', () => {
    expect(trie).to.exist;
  });

  it('should have a root node that is an instance of Node', () => {
    expect(trie.root).to.be.an.instanceof(Node);
  });

  it('should have a count property defaulted to 0', () => {
    expect(trie.count).to.equal(0);
    // console.log(JSON.stringify(trie, null, 4))
  });
});

describe('INSERT', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie.insert).to.exist;
  })

  it('should increment word count of the trie by 1', () => {
    expect(trie.count).to.equal(0);
    trie.insert('word');
    expect(trie.count).to.equal(1);
  })

  it('should not increment word count when inserting duplicate words', () => {
    trie.insert('cat');
    trie.insert('dog');
    trie.insert('cat');

    expect(trie.count).to.equal(2);
    // console.log(JSON.stringify(trie, null, 4))
  })
})

describe('SUGGEST', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie.suggest).to.exist;
  })

  it('should take a prefix', () => {  
    trie.insert('dog');
    trie.insert('cat');
    trie.insert('doggo');
    trie.insert('doggy');
    trie.insert('dog')
    console.log(trie.suggest('do'))
    console.log(JSON.stringify(trie, null, 4))
    expect(true).to.equal(true);
  });

  // it('should return an array of results', () => {
  //   trie.insert('cat');
  //   trie.insert('catty');
  //   trie.insert('cats');
  //   trie.insert('category');
  //   trie.insert('cricket');

  //   trie.suggest('cat');
  //   expect(trie.suggestions.length).to.equal(4)

  // })
})

describe('POPULATE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie.populate).to.exist;
  })

  it('should add an array of words to trie', () => {

  })

  it('should increase trie word count to 234371', () => {
    trie.populate(dictionary);
    let numberOfWords = trie.count;
    expect(numberOfWords).to.equal(234371);
  })
})

describe('FIND', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie.find).to.exist;
  })

  it('should be able to find a word in the dictionary', () => {
    trie.insert('dog');
    trie.find('dog');
    expect(trie.find('dog')).to.deep.equal(trie.root.children.d.children.o.children.g)
  })
})

describe('DELETE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  })

  it('should exist', () => {
    expect(trie.delete).to.exist;
  })

  it('should remove completed word flag from last node', () => {
    trie.insert('hello');
    trie.insert('help');
    trie.delete('help');

    console.log(JSON.stringify(trie, null, 4))
    expect(trie.count).to.equal(1)
  })
})
