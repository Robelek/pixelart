let iletile = 16;
let canvas=[];
let pierwszeuzycie=true;
let poprzedninumerpol =0;
function color(e)
{
    
    e.classList.toggle('tileblack');
       //alert(e);
}
function start()
{
    var numerpol = document.getElementById("numerpol").value;
    var numerkolumn = document.getElementById("numerkolumn").value;
    document.documentElement.style.setProperty('--liczbakolumn', numerkolumn);
    //alert(numerkolumn);
    if(!pierwszeuzycie)
    {
        
        for(let i=poprzedninumerpol;i>0;i--)
        {
            let ostatniousuniete = document.getElementById("canvas").lastElementChild;
            document.getElementById("canvas").removeChild(ostatniousuniete);
        }
        canvas.length=0;
        pierwszeuzycie=true;
    }
    for(let i=0;i<numerpol;i++)
    {
        canvas.push(document.createElement("div"));
        canvas[i].classList.add('tile');
        canvas[i].onclick = function()
        {
        color(this);
        }
    document.getElementById("canvas").appendChild(canvas[i]);
    }
    poprzedninumerpol=numerpol;
    pierwszeuzycie=false;
}
