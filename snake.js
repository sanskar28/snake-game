const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");


// create the unit
const box = cvs.height/20;

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

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

let maze = [];

function createmaze(){
    let count=0;

    let choice =Math.floor( Math.random()*3 +1);
    
    
    switch(choice){
        case 1 :
                for(let i=5; i<15;i++){
                    maze[count] = {
                        x: 5 * box,
                        y: i * box ,
                    }
                    count++;
                }

                for(let i=5; i<15;i++){
                    maze[count] = {
                        x: 14 * box,
                        y: i * box ,
                    }
                    count++;
                }
                break;
        case 2 :
                maze[0] = {
                    x: 4*box,
                    y: 5*box,
                }
                maze[1] = {
                    x: 4*box,
                    y: 15*box,
                }
                maze[2] = {
                    x: 15*box,
                    y: 15*box,
                }
                maze[3] = {
                    x: 15*box,
                    y: 5*box,
                }
                break;
        case 3 :

                 
                
                

    }
            
}



// create the food
let food;
function createfood(){
    food = {
        x : Math.floor(Math.random()*18+1) * box,
        y : Math.floor(Math.random()*18 + 1) * box
    
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
        x : Math.floor(Math.random()*18+1) * box,
        y : Math.floor(Math.random()*18 + 1) * box
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

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( (key == 37 || key == 65 ) && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if((key == 38 || key == 87 )  && d != "DOWN"){
        d = "UP";
        up.play();
    }else if((key == 39 || key == 68 )  && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if((key == 40 || key == 83 )  && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

document.addEventListener('swiped-left', function() {
    d = "LEFT";
});

document.addEventListener('swiped-right', function() {
    d = "UP";
});

document.addEventListener('swiped-up', function() {
    d = "RIGHT";
});

document.addEventListener('swiped-down', function() {
    d = "DOWN";
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

let k = Math.floor(Math.random()*5+1);

    

function draw(){

    switch(k){
        case 1:
            for(let j=1 ; j < 19 ;j++){
                for(let k=1; k<19;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#94fdff" : "#63a9ff";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 2:
            for(let j=1 ; j < 19 ;j++){
                for(let k=1; k<19;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#a7ed93" : "#22e022";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 3:
            for(let j=1 ; j < 19 ;j++){
                for(let k=1; k<19;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#e573f0" : "#edabe5";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 4:
            for(let j=1 ; j < 19 ;j++){
                for(let k=1; k<19;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#9c7a40" : "#e3d3a3";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;
        case 5:
            for(let j=1 ; j < 19 ;j++){
                for(let k=1; k<19;k++){
                ctx.fillStyle = (((k+j)%2) == 0)? "#f07f1d" : "#f5b453";
                ctx.fillRect( j*box, k*box  , box ,box );
                ctx.strokeStyle = "#ffffff";
                ctx.strokeRect(j*box,k*box,box,box);
                }
            }
            break;


    }
    
    
    for(let j=0 ; j < 20 ;j++){
        
        ctx.fillStyle = "#000000";
        ctx.fillRect( j*box, 0  , box ,box );
        ctx.fillRect( 0, j*box  , box ,box );
        ctx.fillRect( 19*box, j*box  , box ,box );
        ctx.fillRect( j*box, 19*box  , box ,box );
        
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
        score++;
        eat.play();
        createfood();

        document.getElementById("score").innerHTML= score;
            
        
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < 1 || snakeX > 18 * box || snakeY < 1 || snakeY > 18*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
        location.reload();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);
let thing  =setInterval(bombdraw,4000);
