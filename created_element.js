elem=document.getElementsByClassName("container");
console.log(elem);
createdelement=document.createElement('p');
createdelement.innerText="this is created text through javascript";
elem[0].appendChild(createdelement);
elem[0].style.fontSize="10vmin";
elem[0].style.color="red"

// action listener

function clicked()
{
    console.log('the button was clicked');
    elem[0].style.background="skyblue";
    elem[0].style.color="yellow";
    elem[0].classList.add("replace");
    elem[0].innerText="button clicked"
    
}

// onload

window.onload=function()
{
    console.log("page loaded ")
    // document.write("page loaded successfully")
}
//adding event to div
elem[0].addEventListener('click',function(){

    console.log("clicked on container");
    elem[0].style.background="skyblue";
})

//mouse over
elem[0].addEventListener('mouseover',function(){

    console.log("mouse_over on container");
    elem[0].style.background="lightgreen";
})

//mouse out
elem[0].addEventListener('mouseout',function(){

    console.log("mouseout of container");
    elem[0].style.background="white";
})

//mouseup
// elem[0].addEventListener('mouseup',function(){

//     console.log("mouseup on container");
//     elem[0].style.background="pink";
// })

// //mousedown
// elem[0].addEventListener('mousedown',function(){

//     console.log("mousedown on container");
//     elem[0].style.background="yellow";
// })

//store html through click