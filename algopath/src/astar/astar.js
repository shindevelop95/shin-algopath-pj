function Astar(startNode, endNode){
    let openSet = [];
    let closeSet = [];  
    let path = [];

    openSet.push(startNode);
    while(openSet.length > 0){
        let leastIndex = 0;
        for(let i = 0; i < openSet.length; i++){
            if(openSet[i].f < openSet[leastIndex].f){
                leastIndex = i;   
            }
        }

        let current = openSet[leastIndex];

        if(current === endNode){
            console.log("Done, Path Control");
        }

        openSet = openSet.filter((elt) = elt !== current);
        closeSet.push(current);
        
    }


}