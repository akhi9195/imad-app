console.log('Loaded!');

var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft+10
    img.style.marginLeft = marginLeft + 'px';
}

var img = document.getElementById('myImg');
img.onclick = function(){
var interval = setInterval(moveRight(),100);
    
}
