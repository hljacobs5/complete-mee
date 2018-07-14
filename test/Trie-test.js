import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';

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
  });
});

describe('insert', () => {
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
  })
})