// Tree traversals with BFS

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const a = new Node('a'); // {val: 'a', left: null, right: null}
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const allNodesDepthRec = (root) => {
    if (!root) return []

    const left = allNodesDepthRec(root.left);
    const right = allNodesDepthRec(root.right);

    return [root.val, ...left, ...right]
}


// BFS ( Queue ) : FIFO
//* You can not use recrusion on a BFS since that would turn it into a stack
const allNodeBreadth = root => {
    if (!root) return [];

    const res = [];
    const queue = [root];

    //FIFO : push and shift methods used

    while (queue.length) {
        const cur = queue.shift();
        res.push(cur.val);

        if (cur.left) queue.push(cur.left)
        if (cur.right) queue.push(cur.right)
    }

    return res

}


// DFS : FILO


const allNodesDepth = root => {
    if (!root) return []
    const result = []
    const stack = [root];

    while (stack.length) {
        const cur = stack.pop();
        result.push(cur.val);
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
    }

}

console.log(allNodeBreadth(a))

const bottomRight = root =>{
    const queue = [root];
    let cur = null;
    while(queue.length){
        cur=queue.shift();
        if(cur.left)queue.push(cur.left)
        if(cur.right)queue.push(cur.right)
    }

    return cur.val


}
