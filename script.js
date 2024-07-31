// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.wrapper'),
//     smooth: true,
//     mobile: {
//         smooth: true
//     },
//     tablet: {
//         smooth: true
//     }
// });





       const fixedContainer= document.querySelector('.fixed-container');




    const cardWrappers=document.querySelectorAll('.page3__bar1');
    

    cardWrappers.forEach((card)=>{
        card.addEventListener('mouseenter',()=>{
            const add=card.getAttribute("data-image");
            console.log("Image URL on mouseenter:", add);
            fixedContainer.style.backgroundImage=`url(${add})`
            fixedContainer.style.display="block"
        })

        card.addEventListener('mouseleave',()=>{
            fixedContainer.style.display="none";
        })
    })


   const wrapper=document.querySelector('.page3__bar-wrapper');

   wrapper.addEventListener('mouseleave',()=>{
    fixedContainer.style.display="none";
})


const headings = document.querySelectorAll(".heading");

// Initialize the first heading as active by default
headings[0].classList.add('active');




headings.forEach((heading) => {
    heading.addEventListener('click',(e)=>{
// e.target.classList.add('active');
// e.target.classList.remove('active');

if(e.target.classList.contains("active")){
return;
}else{
   headings.forEach((heading)=>heading.classList.remove("active"));
   e.target.classList.add("active")
}
    })
});









 




