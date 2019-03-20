const list = document.getElementById('list-data');
const buttonOne = document.getElementById('first');
const buttonTwo = document.getElementById('second');
const buttonThree = document.getElementById('third');
const buttonFour = document.getElementById('forth');


const tag = ["Pig", "Malaysia", "nature", "water"];
const btnNum = [0,1,2,3];
let randomPic = [];
let randomButton = [];


// random pic
function randomTag(){

     let position = 0;
    let i = tag.length;
   

    while(i--){
        position = Math.floor(Math.random()*(i+1));
        randomPic.push(tag[position]);
        tag.splice(position,1);
    }
    return randomPic[0];
};



// random play
function randomStart(){
    let i = btnNum.length;
let position;

while (i--) {
    position = Math.floor(Math.random()*(i+1));
    randomButton.push(btnNum[position]);
    btnNum.splice(position,1);
}
console.log(randomButton)
return [randomButton[0], randomButton[1], randomButton[2], randomButton[3]];
};



// random button
function randomBtn(buttonNum1, buttonNum2, buttonNum3, buttonNum4){
    let i = tag.length;
    let position = 0;

    while (i--) {
        position = Math.floor(Math.random()*(i+1));
        randomPic.push(tag[position]);
        tag.splice(position,1);
    }
    console.log(randomPic);

    buttonOne.innerHTML = randomPic[buttonNum1];
    buttonTwo.innerHTML = randomPic[buttonNum2];
    buttonThree.innerHTML = randomPic[buttonNum3];
    buttonFour.innerHTML = randomPic[buttonNum4];
}

// condition game
var codes = randomStart();
randomBtn(codes[0], codes[1], codes[2], codes[3]);
getTaggedPhotos(randomTag());



function getTaggedPhotos(tagName){
    fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName +'&api_key=0cavMj4hdPOpbXVxdnLLXy3t8Q9QbzU7tXnE3mMFHPQVjmOxHx')
    .then(function(response){ return response.json(); 
})

.then(function(result){
    // console.log(result);

      
    // clear list in the HTML
list.innerHTML = '';


const item = result.response;
        for(let i = 0; i < item.length; i++){
            console.log(item[i]);
const items = item[i];



if(items.photos !== undefined){
    const altSizes = items.photos[0].alt_sizes;
const imgSrc = altSizes[altSizes.length - 3].url; 


const img = document.createElement('img');
                img.src = imgSrc;

                const li = document.createElement('li');
                li.appendChild(img);
                // li.innerHTML = imgSrc;

                list.appendChild(li);
                }
            
        }
    }) 
};




function one(){
    if(buttonOne.innerHTML==randomPic[0]){

        alert("Congratulations");        

    }
    else{
       
        alert(" You're wrong.");
        
    }
    location.reload();
}


function two(){
    if(buttonTwo.innerHTML==randomPic[0]){

        alert("Congratulations");        

    }
    else{
       
        alert(" You're wrong.");
        
    }
    location.reload();
}



function three(){
    if(buttonThree.innerHTML==randomPic[0]){

        alert("Congratulations");        

    }
    else{
       
        alert(" You're wrong.");
        
    }
    location.reload();
}


function four(){
    if(buttonFour.innerHTML==randomPic[0]){

        alert("Congratulations");        

    }
    else{
       
        alert(" You're wrong.");
        
    }
    location.reload();
}
