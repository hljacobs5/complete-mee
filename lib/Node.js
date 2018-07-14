class Node {
  constructor(data) {
    this.data = data;
    this.children = {};
    this.completed = null;
    this.popularity = 0;
  }
}

module.exports = Node;