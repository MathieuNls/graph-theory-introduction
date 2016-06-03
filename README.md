# An introduction to graph theory

[Slides](https://docs.google.com/presentation/d/1Cv7g5NEDc7VjfhrZIcj-HJvGTin8dhriv92A3mrINpE/edit?usp=sharing) (French)

### Make it run

- Install [node](https://nodejs.org/en/download/)
- $ npm install -g ts-node 
- $ npm install -g typescript
- $ node-ts file.ts

### BinarySearchTree

 Simple implementation of a Binary Search tree
 adding 8, 5, 3 and 10 will produce
 ```
  				8
 			   / \
 			  5  10
 			 /
 			3
```
Keys can have nultiple values.

To use it: 

```
let bst:BinarySearchTree = new BinarySearchTree(2, {name:"Math", last:"Nay"});
bst.add(1, { name: "Mathadad", last: "Nay" });
bst.add(3, { name: "Mathadadadadad", last: "Nay" });
bst.add(3, { name: "Mathadadadadad", last: "Nay" });
console.log(bst.search(3));
```
Prints: `[ { name: 'Mathadadadadad', last: 'Nay' },{ name: 'Mathadadadadad', last: 'Nay' } ]`


### Dijkstra

Dijkstra implementation

```
let graph:Dijkstra = new Dijkstra();
graph.addVertex('A', { B: 7, C: 8 });
graph.addVertex('C', { A: 8 });
graph.addVertex('B', { A: 7, F: 8 });
graph.addVertex('F', { B: 8 });
```
Prints : `[ 'A', 'B', 'F' ]`


### Prim [WIP]

```
let g:Graph = new Graph();

g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');
g.addNode('e');
g.addNode('f');

g.addEdge('a', 'b', 1);
g.addEdge('b', 'c', 3);
g.addEdge('a', 'd', 3);
g.addEdge('b', 'd', 2);
g.addEdge('d', 'e', 3);
g.addEdge('b', 'e', 6);
g.addEdge('b', 'f', 5);
g.addEdge('c', 'e', 4);
g.addEdge('e', 'f', 2);
g.addEdge('c', 'f', 4);

let prim:Prim = new Prim(g);
console.log("Result is:", prim.result);
```

