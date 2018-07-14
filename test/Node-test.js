const { expect } = require('chai');
import Node from '../lib/Node';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  })

  it('should exist', () => {
    expect(node).to.exist;
  })

  it('should have a default property of completed set to null', () => {
    expect(node.completed).to.equal(null);
  });

  it('should have a default property of children as an empty object', () => {
    expect(node.children).to.deep.equal({});
  });

  it('should have a default property of popularity set to 0', () => {
    expect(node.popularity).to.equal(0);
  });
});