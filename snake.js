

//other than game codes

let p=1;
let au =0;
let prevspeed;

let speed = 65;

let choice=1;


let d;
let hscore=0;

function reload(){


//get DPI
let dpi = window.devicePixelRatio;
//get canvas
let cvs = document.getElementById('snake');
//get context
let ctx = cvs.getContext('2d');


console.log(dpi);

function fix_dpi() {

let style_height = +getComputedStyle(cvs).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(cvs).getPropertyValue("width").slice(0, -2);
//scale the canvas
cvs.setAttribute('height', style_height * dpi);
cvs.setAttribute('width', style_width * dpi);
}


// create the unit
let box=30* dpi;
if(window.matchMedia("(min-width:1200px)").matches){
    box=31.5* dpi;
}
if(window.matchMedia("(min-width:1080px)").matches){
    box=30* dpi;
}

if(window.matchMedia("(max-width:1080px)").matches){
    box=27* dpi;
}
if(window.matchMedia("(max-width:900px)").matches){
    box=25* dpi;
}
if(window.matchMedia("(max-width:750px)").matches){
    box=23.5* dpi;
}
if(window.matchMedia("(max-width:600px)").matches){
    box=22* dpi;
}
if(window.matchMedia("(max-width:500px)").matches){
    box=20* dpi;
}
if(window.matchMedia("(max-width:400px)").matches){
    box=17* dpi;
}
if(window.matchMedia("(max-width:350px)").matches){
    box=14* dpi;
}
if(window.matchMedia("(max-width:300px)").matches){
    box=13* dpi;
}
if(window.matchMedia("(max-width:250px)").matches){
    box=12.5* dpi;
}
console.log(box);



let height =  Math.floor(cvs.height/box);
let width = Math.floor(cvs.width/box);

// load images





const foodImg = new Image();
foodImg.src = "img/food.png";
foodImg.height = box;
foodImg.width = box;

const bomb = new Image();
bomb.src = "img/bomb.png";
bomb.height = box;
bomb.width = box;

// load audio files

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};


let maze = [];

function createmaze(){
    let count=0;

    
    
    switch(choice){
        case 0 :
                break;
        case 1 :
                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: 5 * box,
                        y: i * box ,
                    }
                    count++;
                }

                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: (width-5) * box,
                        y: i * box ,
                    }
                    count++;
                }
                break;
        case 2 :
            for(let i=5; i<(width-4);i++){
                maze[count] = {
                    x: i * box ,
                    y: 5 * box,
                    
                }
                count++;
            }

            for(let i=5; i<(width-4);i++){
                maze[count] = {
                    x: i * box ,
                    y: (height-4) * box,
                    
                }
                count++;
            }
                break;
        case 3 :
            coun=0
            for(let i= Math.floor((height/2) -6); coun<11;i++){
               maze[count] = {
                x: Math.floor((width/2) -3)*box,
                y:i*box,
                
               }
               count++;
               coun++;
            }
            coun=0;
            for(let i= Math.floor((height/2) -6); coun<11;i++){
                maze[count] = {
                 x: Math.floor((width/2) +4)*box,
                 y:i*box,
                 
                }
                count++;
                coun++;
             }
             coun=0;
             for(let i= Math.floor((width/2) -2); coun<6;i++){
                maze[count] = {
                 x:i*box,
                 y: Math.floor((height/2) -1)*box,
                }
                count++;
                coun++;
             }
             if(window.matchMedia("(min-width:500px)").matches){
                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: 5 * box,
                        y: i * box ,
                    }
                    count++;
                }
    
                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: (width-5) * box,
                        y: i * box ,
                    }
                    count++;
                }
            }
             break;
            case 4  :
            coun=0
            for(let i= Math.floor((height/2) -6); coun<11;i++){
               maze[count] = {
                x: Math.floor((width/2) -6)*box,
                y:i*box,
               
               }
               count++;
               coun++;
            }
            coun=0;
            for(let i= Math.floor((height/2) -6); coun<11;i++){
                maze[count] = {
                x: Math.floor((width/2) +6)*box,
                 y:i*box,
                 
                }
                count++;
                coun++;
             }
             coun=0;
            for(let i= Math.floor((width/2) -6); coun<12;i++){
                maze[count] = {
                 x:i*box,
                 y: Math.floor((height/2) -6)*box,
                }
                count++;
                coun++;
            }
            coun=0;
            for(let i= Math.floor((width/2) -6); coun<10;i++){
                maze[count] = {
                 x:i*box,
                 y: Math.floor((height/2) +4)*box,
                }
                count++;
                coun++;
            }
            if(window.matchMedia("(min-width:650px)").matches){
                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: 5 * box,
                        y: i * box ,
                    }
                    count++;
                }
    
                for(let i=5; i<(height-4);i++){
                    maze[count] = {
                        x: (width-5) * box,
                        y: i * box ,
                    }
                    count++;
                }
            }
            
            break;
            

            
             
            
                 
                
                

    }
            
}

//reset global variables


// create the food
let food;
function createfood(){
    food = {
        x : Math.floor(Math.random()*(width -1)+1) * box,
        y : Math.floor(Math.random()*(height-1) + 1) * box,
    
    }

    for(let i = 0; i < snake.length; i++){
        if(food.x == snake[i].x && food.y == snake[i].y){
           createfood();
       }
    }
    for(let i = 0; i < maze.length; i++){
        if(food.x == maze[i].x && food.y == maze[i].y){
           createfood();
       }
    }

    

}

let bombj;
function bombdraw(){
    bombj = {
        x : Math.floor(Math.random()*(width -1)+1) * box,
        y : Math.floor(Math.random()*(height-1) + 1) * box
    }
    for(let i = 0; i < snake.length; i++){
        if(bombj.x == snake[i].x && bombj.y == snake[i].y){
           bombdraw();
        }
        
    }
    if(bombj.x == food.x && bombj.y == food.y){
        bombdraw();
    }
    for(let i = 0; i < maze.length; i++){
        if(bombj.x == maze[i].x && bombj.y == maze[i].y){
           bombdraw();
       }
    }


}

// create the score var

let score = 0;




//control the snake
if(au==0){
    d="none";
}



let changedir=false;
document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if(changedir){
        return;
    }

    changedir= true;
    if( (key == 37 || key == 65 ) && d != "RIGHT"){
        
        d = "LEFT";
    }else if((key == 38 || key == 87 )  && d != "DOWN"){
        d = "UP";

    }else if((key == 39 || key == 68 )  && d != "LEFT"){
        d = "RIGHT";
        
    }else if((key == 40 || key == 83 )  && d != "UP"){
        d = "DOWN";
        
    }
}


cvs.addEventListener('swiped-left', function() {

    if(d!="RIGHT"){
        d = "LEFT";
    }
    
});

cvs.addEventListener('swiped-right', function() {
    if(d!="LEFT"){
        d = "RIGHT";
    }
});

cvs.addEventListener('swiped-up', function() {
    if(d!="DOWN"){
        d = "UP";
    }
});

cvs.addEventListener('swiped-down', function() {
    if(d!="UP"){
        d = "DOWN";
    }
});



// cheack collision function
function collision(head,array){
   for(let i = 0; i < array.length; i++){
         if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }

    for(let i = 0; i < maze.length; i++){
        if(head.x == maze[i].x && head.y == maze[i].y){
           return true;
       }
   }
    if(head.x == bombj.x && head.y == bombj.y){
        return true;
    }

    return false;
}

// draw everything to the canvas




createmaze();

createfood();
bombdraw();





function draw(){
    fix_dpi();
    height =Math.floor(cvs.height/box);
    width = Math.floor(cvs.width/box);
    
    createmaze();

    
    
    
    switch(p){
        
        case 1:
            
            for(let j=0 ; j < width ;j++){
                for(let k=0; k< height;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#94fdff" : "#63a9ff";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 2:
            for(let j=0 ; j < width ;j++){
                for(let k=0; k< height;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#a7ed93" : "#22e022";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 3:
            for(let j=0 ; j < width ;j++){
                for(let k=0; k< height;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#e573f0" : "#edabe5";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 4:
            for(let j=0 ; j < width ;j++){
                for(let k=0; k< height;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#9c7a40" : "#e3d3a3";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 5:
            for(let j=0 ; j < width ;j++){
                for(let k=0; k< height;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#f07f1d" : "#f5b453";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;


    }


    
    
    
    for(let p=0;p<maze.length;p++){
        ctx.fillStyle = "#000000";
        ctx.fillRect( maze[p].x, maze[p].y  , box ,box );

    }
    

    
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);

    }
    
    ctx.drawImage(foodImg, food.x, food.y, box ,box);
    ctx.drawImage(bomb, bombj.x, bombj.y, box, box);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score+=1;
        
        createfood();
        if(score>hscore){
            hscore=score;
            document.getElementById("hscore").innerHTML= hscore;
            document.getElementById("hscore1").innerHTML= hscore;

        }
        document.getElementById("score").innerHTML= score;
        document.getElementById("score1").innerHTML= score;
        
        
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY,
    }
   
    //AUTONOMUS

    function check(ny){
       let ip=0;
        for(ip=0 ;ip < maze.length ; ip++){
            if(ny.x == maze[ip].x && ny.y == maze[ip].y){
                return true;
            }
        }
        return false;

    }

if(au == 1){
    
    goto();
    auto();
}
    
    
    function goto(){
        
            if(snakeX - food.x == 0){

                pj=food.y;

                if(snakeY- food.y > 0){
                    while(snakeY>=pj){
                        let ny = {
                            x : snakeX,
                            y : pj,
                        }
                        
                        if(check(ny)){
                            
                            
                            return;
                        }
                        pj += box;
                    }
                }
                
                else if(snakeY - food.y < 0){
                    pj =food.y;
                    while(snakeY<=pj){
                        let ny = {
                            x : snakeX,
                            y : pj,
                        }
                        if(check(ny)){
                            
                            
                            return;
                        }
                        pj -= box;
                    }
                }

                if(snakeY-food.y > 0){
                    d="UP";
                }else{
                    d="DOWN";
                }
                

                
            }
            let pd;
            if(snakeY - food.y == 0){

                pd=food.x;

                if(snakeX- food.x > 0){
                    while(snakeX>=pd){
                        let np = {
                            x : pd,
                            y : snakeY,
                        }
                        
                        if(check(np)){
                            
                            
                            return;
                        }
                        pd += box;
                    }
                }
                
                else if(snakeX - food.x < 0){
                    pd =food.x;
                    while(snakeX<=pd){
                        let np = {
                            x : pd,
                            y : snakeY,
                        }
                        if(check(np)){
                            
                        
                            return;
                        }
                        pd -= box;
                    }
                }
                if(snakeX-food.x > 0){
                    d="LEFT";
                }else{
                    d="RIGHT";
                }
                

                
            }
            
      

        
    }
    

    function auto(){
        let newHead1,newHead11,newHead12;
        if(d =="RIGHT"){
            newHead1 = {
                x : snakeX + box,
                y : snakeY,
            }
            newHead11 ={
                x : snakeX,
                y : snakeY - box,
            }
            newHead12 ={
                x : snakeX,
                y : snakeY + box,
            }

            if(newHead1.x < 0 || newHead1.x > (width-1) * box || newHead1.y < 0 || newHead1.y > (height-1)*box || collision(newHead1,snake)){
                if(newHead11.x < 0 || newHead11.x > (width-1) * box || newHead11.y < 0 || newHead11.y > (height-1)*box || collision(newHead11,snake)){
                    d="DOWN";
                                 
                }
                else if(newHead12.x < 0 || newHead12.x > (width-1) * box || newHead12.y < 0 || newHead12.y > (height-1)*box || collision(newHead12,snake)){
                    d="UP";
                                    }
                else{
                    let p = Math.floor(Math.random()*2+1)

                    if(p==1){
                        d="DOWN";
                    }
                    if(p==2){
                        d="UP";
                    }
                    
                    
                }


            }
            return;
        }
        if(d =="UP"){
            newHead1 = {
                x : snakeX,
                y : snakeY -box,
            }
            newHead11 ={
                x : snakeX + box,
                y : snakeY  ,
            }
            newHead12 ={
                x : snakeX -box,
                y : snakeY ,
            }

            if(newHead1.x < 0 || newHead1.x > (width-1) * box || newHead1.y < 0 || newHead1.y > (height-1)*box || collision(newHead1,snake)){
                if(newHead11.x < 0 || newHead11.x > (width-1) * box || newHead11.y < 0 || newHead11.y > (height-1)*box || collision(newHead11,snake)){
                    d="LEFT";
                                    }
                else if(newHead12.x < 0 || newHead12.x > (width-1) * box || newHead12.y < 0 || newHead12.y > (height-1)*box || collision(newHead12,snake)){
                    d="RIGHT";
                                    }
                else{
                    let p = Math.floor(Math.random()*2+1)

                    if(p==1){
                        d="LEFT";
                    }
                    if(p==2){
                        d="RIGHT";
                    }
                    
                }


            }
            return;
        }
        if(d =="LEFT"){
            newHead1 = {
                x : snakeX - box,
                y : snakeY,
            }
            newHead11 ={
                x : snakeX,
                y : snakeY - box,
            }
            newHead12 ={
                x : snakeX,
                y : snakeY + box,
            }

            if(newHead1.x < 0 || newHead1.x > (width-1) * box || newHead1.y < 0 || newHead1.y > (height-1)*box || collision(newHead1,snake)){
                if(newHead11.x < 0 || newHead11.x > (width-1) * box || newHead11.y < 0 || newHead11.y > (height-1)*box || collision(newHead11,snake)){
                    d="DOWN";
                                    }
                else if(newHead12.x < 0 || newHead12.x > (width-1) * box || newHead12.y < 0 || newHead12.y > (height-1)*box || collision(newHead12,snake)){
                    d="UP";
                                    }
                else{
                    let p = Math.floor(Math.random()*2+1)

                    if(p==1){
                        d="DOWN";
                    }
                    if(p==2){
                        d="UP";
                    }
                    
                }


            }
            return;
        }
        if(d =="DOWN"){
            newHead1 = {
                x : snakeX,
                y : snakeY + box,
            }
            newHead11 ={
                x : snakeX + box,
                y : snakeY  ,
            }
            newHead12 ={
                x : snakeX -box,
                y : snakeY ,
            }

            if(newHead1.x < 0 || newHead1.x > (width-1) * box || newHead1.y < 0 || newHead1.y > (height-1)*box || collision(newHead1,snake)){
                if(newHead11.x < 0 || newHead11.x > (width-1) * box || newHead11.y < 0 || newHead11.y > (height-1)*box || collision(newHead11,snake)){
                    d="LEFT";
                                    }
                else if(newHead12.x < 0 || newHead12.x > (width-1) * box || newHead12.y < 0 || newHead12.y > (height-1)*box || collision(newHead12,snake)){
                    d="RIGHT";
                                    }
                else{
                    let p = Math.floor(Math.random()*2+1)

                    if(p==1){
                        d="LEFT";
                    }
                    if(p==2){
                        d="RIGHT";
                    }
                    
                }


            }
            return;
        }
        

    }
    
    // game over
    
    if(snakeX < 0 || snakeX > (width-1) * box || snakeY < 0 || snakeY > (height-1)*box || collision(newHead,snake)){
        clearInterval(game);
        clearInterval(thing);
        
        
        document.getElementById("score").innerHTML= 0;

        if(au==1){
            au=0;
            speed=prevspeed;
        }
        
        
        setTimeout(() => {
            document.getElementById("menu").classList.add("active");
            
        }, 500); 
        
        
        
    }
    
    snake.unshift(newHead);

    changedir=false;
    
    
}

// call draw function every 100 ms
console.log(speed);
let game = setInterval(draw,speed);
let thing  =setInterval(bombdraw,4000);
}