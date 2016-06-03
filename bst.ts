/**
 * Simple implementation of a Binary Search tree
 * adding 8, 5, 3 and 10 will produce
 *
 * 				8
 * 			   / \
 * 			  5  10
 * 			 /
 * 			3
 * Keys can have nultiple values.
 */
class BinarySearchTree {

	left: BinarySearchTree;
	right: BinarySearchTree;
	parent: BinarySearchTree;
	key: number;
	value = [];

	/**
	 * Constructor w/ key, value and optional parent
	 * @param {number}           key    
	 * @param {any}              value  
	 * @param {BinarySearchTree} parent (optional)
	 */
	constructor(key: number, value: any, parent?: BinarySearchTree) {
		this.key = key;
		this.value.push(value);
		this.parent = parent;
	}

	/**
	 * Describes how to compare two key
	 * @param  {number} a 
	 * @param  {number} b 
	 * @return {number}   
	 */
	compareKeys(a: number, b: number): number {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	}

	/**
	 * Add a node into the best
	 * @param {number} key   
	 * @param {any}    value 
	 */
	add(key: number, value: any) {

		//Root case
		if (this.key === undefined || this.key === key) {
			this.key = key;
			this.value.push(value);
		} else {

			if (this.compareKeys(this.key, key) < 0) {
				//Case left exists
				if (this.left !== undefined) {
					this.left.add(key, value);
				//Case left doesn't
				} else {
					this.left = new BinarySearchTree(key, value, this);
				}
			}else{
				//Case right exists
				if (this.right !== undefined) {
					this.right.add(key, value);
				//Case right doesn't
				} else {
					this.right = new BinarySearchTree(key, value, this);
				}
			}

		}
	}

	/**
	 * Searches a key in the tree
	 * @param  {number} key 
	 * @return {any[]}      
	 */
	search(key:number):any[]{

		//Case tree is empty
		if(this.key === undefined){
			return [];
		}

		//Case we found the key
		if(this.compareKeys(this.key, key) === 0){
			return this.value;
		}

		//We should go left
		if (this.compareKeys(this.key, key) < 0) {
			if(this.left !== undefined){
				return this.left.search(key);
			}else{
				return [];
			}
		//We should go right
		} else {
			if (this.right !== undefined){
				return this.right.search(key);
			} else {
				return [];
			}
		}
	}
}


let bst:BinarySearchTree = new BinarySearchTree(2, {name:"Math", last:"Nay"});
bst.add(1, { name: "Mathadad", last: "Nay" });
bst.add(3, { name: "Mathadadadadad", last: "Nay" });
bst.add(3, { name: "Mathadadadadad", last: "Nay" });
console.log(bst.search(3));