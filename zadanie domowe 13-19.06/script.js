"use strict";
const ARRAYLENGTH = 20; //list length declaration
const FIRST_LIST_END = 4;
const SECOND_LIST_END = 7;
const THIRD_LIST_END= 10;
let listArray = [];

const nav = document.getElementsByClassName("container");
let olLists = () => {
    for(let i = 0; i < 3; i++){
        let ol = document.createElement('ol');
        if(i === 0) ol.setAttribute('id', 'firstList');
        else if (i === 1) ol.setAttribute('id', 'secondList');
        else ol.setAttribute('id', 'thirdList');
        nav[0].append(ol);
    }
}
olLists();


let liElems = () =>{
    for(let i = 1; i < ARRAYLENGTH; i++){
        if(i < FIRST_LIST_END){
            let ol = document.getElementById('firstList');
            let liE = document.createElement('li');
            liE.setAttribute('id', `item${i}`);
            liE.innerText = i;
            ol.append(liE);
        }else if(i < SECOND_LIST_END){
            let ol = document.getElementById('secondList');
            let liE = document.createElement('li');
            liE.setAttribute('id', `item${i}`);
            liE.innerText = i;
            ol.append(liE);
        }else if(i < THIRD_LIST_END){
            let ol = document.getElementById('thirdList');
            let liE = document.createElement('li');
            liE.setAttribute('id', `item${i}`);
            liE.innerText = i;
            ol.append(liE);
        }
    }
}


liElems();

let list1 = document.getElementById('firstList');
let list2 = document.getElementById('secondList');
let list3 = document.getElementById('thirdList');

list1.onmouseover = function(){

    for(let i = 1; i < THIRD_LIST_END; i++){ 
        let liE = document.getElementById(`item${i}`);
        console.log(liE);
        let a = +i + 1;
        liE.innerText = a;
    }

    // for(let i = 1; i < ARRAYLENGTH; i++){
    //     if(i < FIRST_LIST_END + 1){
    //         let ol = document.getElementById('firstList');
    //         let liE = document.createElement('li');
    //         liE.setAttribute('id', `${i}`);
    //         liE.innerText = i;
    //         ol.append(liE);
    //     }else if(i < SECOND_LIST_END + 1){
    //         let ol = document.getElementById('secondList');
    //         let liE = document.createElement('li');
    //         liE.setAttribute('id', `${i}`);
    //         liE.innerText = i;
    //         ol.append(liE);
    //     }else if(i < THIRD_LIST_END + 1){
    //         let ol = document.getElementById('thirdList');
    //         let liE = document.createElement('li');
    //         liE.setAttribute('id', `${i}`);
    //         liE.innerText = i;
    //         ol.append(liE);
    //     }
    // }

}

list1.onmouseout = function(){
    for(let i = 1; i < THIRD_LIST_END; i++){  //think about GLOBAL DECLARATION
        let liE = document.getElementById(`item${i}`);
        liE.innerText = +i;
    }
}


list2.onmouseover = function(){
    for(let i = FIRST_LIST_END; i < THIRD_LIST_END; i++){
        let liE = document.getElementById(`item${i}`);
        let a = +i + 1;
        liE.innerText = a;
    }
}

list2.onmouseout = function(){
    for(let i = FIRST_LIST_END; i < THIRD_LIST_END; i++){
        let liE = document.getElementById(`item${i}`);
        liE.innerText = i;
    }
}

list3.onmouseover = function(){
    for(let i = SECOND_LIST_END; i < THIRD_LIST_END; i++){
        let liE = document.getElementById(`item${i}`);
        let a = i + 1;
        liE.innerText = a;
    }
}

list3.onmouseout = function(){
    for(let i = SECOND_LIST_END; i < THIRD_LIST_END; i++){
        let liE = document.getElementById(`item${i}`);
        liE.innerText = i;
    }
}



// const list1 = lists[0];
// const list2 = lists[1];
// const list3 = lists[2];

// for(let i=0; i < ARRAYLENGTH; i++){
//     listArray[i] = `item ${i}`;
//     if(i < FIRSTLISTEND){
//         const liE = document.createElement('li');
//         liE.id = i;
//         console.log("LIE ID CHECK: ", liE);
//         console.log(liE);
//         liE.innerText = listArray[i];
//         list1.append(liE);
//     }else if(i < SECONDLISYEND){
//         const liE = document.createElement('li');
//         liE.id = i;
//         liE.innerText = listArray[i];
//         list2.append(liE);
//     } else if(i < THIRDLISTEND){
//         const liE = document.createElement('li');
//         liE.id = i;
//         liE.innerText = listArray[i];
//         list3.append(liE);
//     }
// }

// let test = document.getElementById("firstList");
// test.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "white";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//       event.target.style.color = "";
//     }, 100);


//     document.onmouseover = function(e){
    
//      let target = +e.target.id;
//      document.getElementsByid(2).style.color = "white";
//      console.log("Typeof target", typeof target);

//      for(let i = target; i < 9; i++){
//         let newItemNumberCopy = i + 2;
//         let newItemnumberDest = i + 1;
//         console.log("NewItemNuberCopy: ", newItemNumberCopy);
//         let nextValue = document.getElementById(newItemNumberCopy).textContent;
//         document.getElementById(newItemnumberDest).textContent = nextValue;
        
//         console.log(nextValue);
        

//      }   
//     }


//   }, false);

// onclick => { event.target == element na ktoty najechalas let elemensdocument.querySelectorAll(".jakaskalsHTML"); 
// for(let x of elements){ if(x !== event.target){ x.stye.opacity = 0; } }