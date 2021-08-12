import React,{useState, useEffect} from 'react'
import Node from './Node';
import './Pathfind.css'
const cols = 25;
const rows = 10;


const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows-1;
const NODE_END_COL = cols - 1;

function Pathfind() {
    const [Grid, setGrid] = useState([]);

    useEffect(() => {
        initializeGrid();
    },[])
    const initializeGrid = () => {
        const grid = new Array(rows);

        for(let i = 0; i  < rows; i++){
            grid[i] = new Array(cols);
        }
        createSpot(grid);
        setGrid(grid);
        addNeighbours(grid);
        
    }
    console.log(Grid);
//Create the spots
const createSpot = (grid) =>{
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            grid[i][j] = new Spot(i,j);
        }
    }
};

//SPOT CONSTRUCTOR
function Spot(i,j)
{
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
    this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
    this.neighbours = [];
    this.previous =0;
    this.addneighbours = function (grid){
        let i = this.x;
        let j = this.y;
        if(i > 0) this.neighbours.push(grid[i - 1][j]);
        if(i < rows - 1) this.neighbours.push(grid[i + 1][j]);
        if(j > 0) this.neighbours.push(grid[i][j - 1]);
        if(j < cols - 1 ) this.neighbours.push(grid[i][j + 1]);
    }
}

const addNeighbours = (grid) => {
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            grid[i][j].addneighbours(grid);
        }
    }
}

//GRID WITH NODE
    const gridwithNode = (
        <div>
            {Grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="rowWrapper">
                        {row.map((col,colIndex) => {
                            const {isStart, isEnd} = col;
                            return <Node key = {colIndex} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex}/>
                        })}
                    </div>
                )
            })}
        </div>
    )
    return (
        <div className="wrapper">
        {gridwithNode}
        </div>
    )
}

export default Pathfind