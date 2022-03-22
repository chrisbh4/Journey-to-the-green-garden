

// BFS ( Queue ) : FIFO
//* You can not use recrusion on a BFS since that would turn it into a stack
const allNodeBreadth = root =>{
    if (!root) return [];

    const res = [];
    const queue = [root];

    //FIFO : push and shift methods used

    while(queue.length){
        const cur = queue.shift();
        res.push(cur.val);

        if(cur.left) queue.push(cur.left)
        if(cur.right) queue.push(cur.right)
    }

    return res

}


// DFS : FILO



 
