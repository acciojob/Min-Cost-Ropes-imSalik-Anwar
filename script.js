class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
function mincost(arr){ 
  arr.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
	let q = new Queue();
	for(let e of arr) q.enqueue(e)

	let cost = 0;

	while(q.length > 1){
		let op1 = q.dequeue()
		let op2 = q.dequeue()
		let curCost = op1 + op2

		cost += curCost
		q.enqueue(curCost)
	}
	  return cost
}

module.exports=mincost;
