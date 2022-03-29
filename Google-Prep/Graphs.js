
//

const graph = {
    a:['b', 'c'],
    b: ['d'],
    c: ['b', 'e'],
    d: [],
    e:[],
    f:['c']
}

// given a direct acyclic graph determine a path between 2 nodes
// Is the graph cyclic or acyclic
// is start in graph

const hasPathDepth = ( graph , start , end) =>{
    if ( start === end ) true;

    for(let neighbor of graph[start]){
        const res = hasPathDepth(graph, neighbor, end)
        if( res) return true
    }

    return false
}


const hasPathBreadth = ( graph , start , end )=>{
    const queue = [start];

    while(queue.length){
        const current = queue.shift();
        // check start of end quality
        // iterate through neighbors

        for(let node of graph[current]){
            if(node === end) return true
            queue.push(node)
        }
    }
    return false
}


//Turn mutliple arrays into a graph

const hasUndirectedPath = ( edges , a , b )=>{

    const graph = toGraph(edges);
    console.log(graph)
}

const toGraph = (edges) =>{
    const graph = {};
    console.log(graph)
    edges.forEach(edge =>{
        //if idx[0] is inside the graph then push idx[1] into the array else idx[0] = [idx1]
        const [a,b]= edge;
        a in graph ? graph[a].push(b) : graph[a] = [b];
        b in graph ? graph[b].push(a) : graph[b] = [a];
    })

    return graph
}
