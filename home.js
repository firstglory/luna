function init(){
    sidebar = document.body.getElementsByClassName('sidebar')[0];
    blocks = []
    lines = ["Shall I compare thee to a summer's day?", "Thou art more lovely and more temperate.", "Rough winds do shake the darling buds of May,", "And summer's lease hath all too short a date.", "Sometime too hot the eye of heaven shines,", "And often is his gold complexion dimmed;", "And every fair from fair sometime declines,", "By chance, or nature's changing course, untrimmed;", "But thy eternal summer shall not fade,", "Nor lose possession of that fair thou ow'st,", "Nor shall death brag thou wand'rest in his shade,", "When in eternal lines to Time thou grow'st.", "So long as men can breathe, or eyes can see,", "So long lives this, and this gives life to thee."];
    var nblock, ntext;
    for(i in lines){
        nblock = document.createElement("div");
        ntext = document.createTextNode(lines[i]);
        nblock.setAttribute("class", "demoblock");
        nblock.appendChild(ntext);
        setCopy(nblock);
        sidebar.appendChild(nblock);
    }
}

function setCopy(nblock){
    nblock.onmousedown = dragCopy;

    function dragCopy(e){
        var block, text;
        block = document.createElement("div");
        text = document.createTextNode(nblock.innerText);
        block.setAttribute("class", "block");
        block.appendChild(text);
        setDrag(block);
        document.body.appendChild(block);
    }
}

function setDrag(block){
    block.onmousedown = dragMouseDown;

    function dragMouseDown(e){
        xstart = e.clientX;
        ystart = e.clientY;
        document.onmouseup = dragMouseUp;
        // block.onmouseleave = dragMouseUp;
        document.onmousemove = dragMouseMove;
    }

    function dragMouseUp(e){
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function dragMouseMove(e){
        deltax = e.clientX - xstart;
        deltay = e.clientY - ystart;
        xstart = e.clientX;
        ystart = e.clientY;
        block.style.left = (block.offsetLeft + deltax) + "px";
        block.style.top = (block.offsetTop + deltay) + "px";  
    }
    
}
