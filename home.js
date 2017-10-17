function init(){
    blocks = document.body.getElementsByClassName('block');
    for(i in blocks){
        var block = blocks[i];
        setDrag(block);
    }
}

function setDrag(block){
    block.onmousedown = dragMouseDown;

    function dragMouseDown(e){
        xstart = e.clientX;
        ystart = e.clientY;
        block.onmouseup = dragMouseUp;
        block.onmousemove = dragMouseMove;
    }

    function dragMouseUp(e){
        block.onmouseup = null;
        block.onmousemove = null;
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
