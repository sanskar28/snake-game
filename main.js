

document.getElementById("play").onclick = function(){
    reload();
    setTimeout(() => {
        document.getElementById("menu").classList.remove("active");
    }, 500);
                
    
    
    }

    


const optns = document.getElementById("options");
const oplist = document.getElementsByClassName("op-list");

const nextbtn =document.getElementById("nextbtn");
const prevbtn = document.getElementById("prevbtn");

let count = 1 ;






nextbtn.onclick = function(){
    
    oplist[count].classList.remove("active");
    console.log(oplist.length);
    
    count++;
    if(count >= oplist.length) {
        count = 0;
    }
    oplist[count].classList.add("active");
    choice = count;
}

prevbtn.onclick = function(){
    oplist[count].classList.remove("active");
    count--;
    if(count < 0) {
        count = oplist.length-1;
    }
    oplist[count].classList.add("active");

    choice=count;
}

//1


const oplist1 = document.getElementsByClassName("op-list1");

const nextbtn1 =document.getElementById("nextbtn1");
const prevbtn1 = document.getElementById("prevbtn1");

let count1 = 2 ;






nextbtn1.onclick = function(){
    
    oplist1[count1].classList.remove("active");
    console.log(oplist1.length);
    
    count1++;
    if(count1 >= oplist1.length) {
        count1 = 0;
    }
    oplist1[count1].classList.add("active");
    p=count1+1;
}

prevbtn1.onclick = function(){
    oplist1[count1].classList.remove("active");
    count1--;
    if(count1 < 0) {
        count1 = oplist1.length-1;
    }
    oplist1[count1].classList.add("active");

    p=count1+1;
}



//22222222

const oplist2 = document.getElementsByClassName("op-list2");

const nextbtn2 =document.getElementById("nextbtn2");
const prevbtn2 = document.getElementById("prevbtn2");

let count2 = 1 ;






nextbtn2.onclick = function(){
    
    oplist2[count2].classList.remove("active");
    console.log(oplist2.length);
    
    count2++;
    if(count2 >= oplist2.length) {
        count2 = 0;
    }
    oplist2[count2].classList.add("active");
    
    if(count2==0){
        speed = 100;
    }
    if(count2==1){
        speed = 75;
    }
    if(count2==2){
        speed = 55;
    }
}

prevbtn2.onclick = function(){
    oplist2[count2].classList.remove("active");
    count2--;
    if(count2 < 0) {
        count2 = oplist2.length-1;
    }
    oplist2[count2].classList.add("active");

    if(count2==0){
        speed = 100;
    }
    if(count2==1){
        speed = 75;
    }
    if(count2==2){
        speed = 55;
    }
}






