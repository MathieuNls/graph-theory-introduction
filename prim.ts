/**
 * Edge class
 */
class Edge{

	to:any;
	from:any;
	capacity:number;

	constructor(to: any, from: any, capacity: number){
		this.to = to;
		this.from = from;
		this.capacity = capacity;
	}
}

/**
 * A Graph where you can nodes and edges
 */
class Graph{
	edges:any[] = [];
	nodes:any[] = [];
	nodeMap = {};

	/**
	 * [addNode description]
	 * @param {any} node [description]
	 */
	addNode(node:any){
		this.nodes.push(node);
		this.nodeMap[node] = this.nodes.length-1;
		this.edges[node] = [];
	}

	/**
	 * [addEdge description]
	 * @param {any}    to       [description]
	 * @param {any}    from     [description]
	 * @param {number} capacity [description]
	 */
	addEdge(to:any, from:any, capacity:number){
		this.edges[to].push(new Edge(to, from, capacity));
		this.edges[from].push(new Edge(from, to, capacity));
	}
}

/**
 * Prim Algorithm
 */
class Prim{

	graph:Graph;
	result: any[] = [];
	usedNodes = [];

	/**
	 * Solve minimum tree
	 * @param {Graph} graph [description]
	 */
	constructor(graph:Graph){
		this.graph = graph;

		let node = this.graph.nodes[Math.round(Math.random()*(this.graph.nodes.length-1))];
		this.result.push(node);
		this.usedNodes[node] = true;

		let min = this.findMin();
		while(min != null){
			this.result.push(min);
			this.usedNodes[min] = true;
			min = this.findMin();
		}
	}

	/**
	 * Compute min for each nighbor
	 */
	private findMin(){
		let min = [99999999, undefined];
		
		//Noeud dans le resultat
		for (var i = 0; i < this.result.length; i++) {

			//Check les edges 
			for (var y = 0; y < this.graph.edges[this.result[i]].length; y++) {

				//Un edge < min
				if(this.graph.edges[this.result[i]][y].capacity < min[0] 
					&& this.usedNodes[this.graph.edges[this.result[i]][y].to] === undefined){

					min = [
							this.graph.edges[this.result[i]][y].capacity, 
							this.graph.edges[this.result[i]][y].to
						]
				}
			}
		}

		return min[1];
	}
}

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