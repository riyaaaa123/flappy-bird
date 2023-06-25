var hurdle= document.getElementById('hurdle');
var space= document.getElementById('space');
var char= document.getElementById('char');
var jumping = 0;
var count=0;
space.addEventListener('animationiteration',()=>{
     var random= -((Math.random()*300)+150);
     space.style.top= random + "px";
     count++;


});
setInterval(function(){
    var charTop= 
    parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    if(jumping==0){
    char.style.top= (charTop+3)+"px";}
    var hurdleLeft= parseInt(window.getComputedStyle(hurdle).getPropertyValue('left'));
    var spaceTop= parseInt(window.getComputedStyle(space).getPropertyValue('top'));
    var cTop= -(500-charTop);

    if((charTop>480)||((hurdleLeft<20)&&(hurdleLeft>-50)&&((cTop<spaceTop)||(cTop>spaceTop+130))))
    {
        alert('GameOver '+count);
        char.style.top= 100 +"px";
        count=0;
    }




},10);
function jump(){
jumping=1;
let jumpCount=0;
var jumpInterval= setInterval(function(){
    var charTop= 
parseInt(window.getComputedStyle(char).getPropertyValue('top'));
if((charTop>6)&&(jumpCount<15)){
char.style.top= (charTop-5)+"px";}
   
    if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
    }
    jumpCount++;
},10)


}