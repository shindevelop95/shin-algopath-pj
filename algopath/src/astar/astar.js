function Astar(startNode, endNode){
   
    let openSet = [];
    let closeSet = [];  
    let path = [];
    let visitedNodes = [];
    openSet.push(startNode);
  //  console.log("show me the startNode & endNode", startNode, endNode)
    while(openSet.length > 0){
        let leastIndex = 0;
        for(let i = 0; i < openSet.length; i++){
           // console.log("Show me the length",openSet.length);
            if(openSet[i].f < openSet[leastIndex].f){
                leastIndex = i;   
            }
        }

        let current = openSet[leastIndex];
        visitedNodes.push(current)
        //console.log("show current",current);
       // console.log("show visited nodes",visitedNodes);
        //console.log("show endNode",endNode);
        if(current === endNode){
            let temp = current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;
            }
         //   console.log("shhow me the path",path);
            return {path, visitedNodes};
    
        }

        openSet = openSet.filter((elt) => elt !== current);
       // console.log("show me the filtered openSet", openSet);
        closeSet.push(current);

        let neighbours = current.neighbours;
        for(let i = 0; i < neighbours.length; i++){
            let neighbour = neighbours[i];
            if(!closeSet.includes(neighbour) && !neighbour.isWall){
                let tempG = current.g + 1;
                let newPath = false;
                if(openSet.includes(neighbour)){
                    if(tempG < neighbour.g){
                        neighbour.g = tempG;
                        newPath = true;
                    }
                }else{
                    neighbour.g = tempG;
                    newPath = true;
                    openSet.push(neighbour);
                }
                if(newPath){
                    neighbour.h = heruistic(neighbour, endNode);
                    neighbour.f = neighbour.g + neighbour.f;
                    neighbour.previous = current;
                }
            }
        }
    }

    return {path,visitedNodes, error:"No Path found!"}
}

function heruistic(a,b){
    let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
    return d;
}

export default Astar;