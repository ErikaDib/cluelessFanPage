
var toparr=new Array(4);
toparr[0]=new Image(50,50);
toparr[0].src="/outfits/plaidBlazer.jpeg";
toparr[1]=new Image(50,50);
toparr[1].src="/outfits/orangeTop.jpeg";
toparr[2]=new Image(50,50);
toparr[2].src="/outfits/picture2.jpg";
toparr[3]=new Image(50,50);
toparr[3].src="/outfits/nudetop.jpg";

var canvas = document.getElementById('myCanvas'),
context = canvas.getContext('2d');

window.onload = function (){
    var loadImage=new Image(50,50);
    loadImage.src="/outfits/topPic.jpg";
    var loadImageTwo=new Image(50,50);
    loadImageTwo.src="/outfits/bottomsPic.jpg"
    context.drawImage(loadImage, 60, 20, 350, 350);
    contextTwo.drawImage(loadImageTwo, 60, 20, 350, 350)
}

function make_base()
{
var picNum = Math.floor(Math.random() * 4); 
context.drawImage(toparr[picNum], 60, 20, 350, 350);
}
var actionBtn= document.getElementById('btn1');
actionBtn.addEventListener('click',make_base,false);