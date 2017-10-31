var button = new Array(5);

    button[0]=new Image(50,50);
    button[0].src="/outfits/plaidSkirt.jpg";
    button[1]=new Image(50,50);
    button[1].src="/outfits/plaidSkirtDark.jpg";
    button[2]=new Image(50,50);
    button[2].src="/outfits/redSkirt.jpg";
    button[3]=new Image(50,50);
    button[3].src="/outfits/redPlaidSkirt.jpg";
    button[4]=new Image(50,50);
    button[4].src="/outfits/shorts.jpg";


   


var canvasTwo = document.getElementById('myCanvasTwo'),
contextTwo = canvasTwo.getContext('2d');





function make_buttton(){
 var picNum = Math.floor(Math.random() * 5); 
    contextTwo.drawImage(button[picNum], 60, 20, 350, 350);
}
var actionBtnTwo= document.getElementById('btn4');
actionBtnTwo.addEventListener('click',make_buttton,false);

function dressMe(){
   
    alert("Nice outfit Match");
}



var buttonDressMe=document.getElementById('btn5');
buttonDressMe.addEventListener('click',dressMe,false);

function refreshpage(){
    window.location.reload();
}

var refresh=document.getElementById('btn2');
refresh.addEventListener('click',refreshpage,false);