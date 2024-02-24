const cells= document.querySelectorAll(".cell");
const statustext= document.querySelector("#statustext");
const restartbtn= document.querySelector("#restartbtn");
const winconditions= [[0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [2,4,6]];

let options= ["","","","","","","","",""];
let currentplayer= "x";
let running= false;

initializegame();

function initializegame()
{
    cells.forEach(cell=> cell.addEventListener("click",cellclicked));
    restartbtn.addEventListener("click",restartgame);
    statustext.textContent= `${currentplayer}'s turn`;
    running= true;
}

function cellclicked()
{
    const cellindex= this.getAttribute("cellindex");
    if(options[cellindex]!=""||!running)
    {return;}
    updatecell(this,cellindex);
    checkwinner();
}

function updatecell(cell,index)
{options[index]= currentplayer;
cell.textContent= currentplayer;}

function changeplayer()
{
    currentplayer= (currentplayer=="x")?"o":"x";
    statustext.textContent= `${currentplayer}'s turn`;
}

function checkwinner()
{
    let roundwon= false;

    for(let i=0; i<winconditions.length;i++)
    {
        const condition= winconditions[i];
        const cellA= options[condition[0]];
        const cellB= options[condition[1]];
        const cellC= options[condition[2]];
        

    if(cellA==""|| cellB==""||cellC=="")
    {continue;}
    
    if(cellA==cellB&& cellB== cellC)
    {
        roundwon= true;
        break;
    } }

    if(roundwon)
    {
        statustext.textContent= `${currentplayer}'s wins`;
        running= false;
    }
    else if(!options.includes(""))
    {
        statustext.textContent="Draw!";
        running= false;
    }
    else{changeplayer();}
}

function restartgame()
{currentplayer="x";
options=["","","","","","","","",""];
statustext.textContent= `${currentplayer}'s turn`;
cells.forEach(cell=> cell.textContent="");
running=true;}