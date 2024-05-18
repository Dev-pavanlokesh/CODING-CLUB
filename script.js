
// Feeling sooo exited to work with you :) ;

gsap.from(".clip-top, .clip-bottom",2,{
  delay:1,
  height:"50vh",
  ease:"power4.inOut",
});

gsap.to(".marquee",3.5,{
  delay:0.75,
  top:"50%",
  ease:"power3.inOut"
});

gsap.from(".clip-top .marquee, .clip-bottom .marquee",5,{
  delay:1,
  left:"100%",
  ease:"power4.inOut",
});


gsap.from(".clip-center .marquee",5,{
  delay: 1,
  left:"-50%",
  ease:"power3.inOut",
})


gsap.to(".clip-top",2,{
  delay:6,
  clipPath:"inset(0 0 100% 0)",
  ease:"power4.inOut",
})

gsap.to(".clip-bottom",2,{
  delay:6,
  clipPath:"inset(100% 0 0 0)",
  ease:"power4.inOut",
})








const getData = async ()=>{

    const response = await fetch('https://coding-week-2024-api.onrender.com/api/data');
    const data = await response.json();
    return data;
};

const arr = getData().then((response)=>{




const tag1 = document.getElementById('tag-1');
const title1 = document.querySelector('.card1-content h2');
const author1 = document.querySelector('.card1-content h3');
const bg1 = document.querySelector('#card1');
const date1 = document.querySelector('.card1-content .date p');

bg1.addEventListener('click',()=>{
    Swal.fire({
        title: `${response[0].headline}`,
        text: `${response[0].content}`,
        imageUrl: `${response[0].image}`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
        
        confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> 
      `,
      });
})

date1.innerText = response[0].date;
bg1.style.backgroundImage = `url('${response[0].image}')`;   
author1.innerText = `by ${response[0].author}`;
title1.innerText = response[0].headline;
tag1.innerText =  response[0].type;





const tag2 = document.getElementById('tag-2');
const title2 = document.querySelector('.card2-content h2');
const author2 = document.querySelector('.card2-content h3');
const bg2 = document.querySelector('#card2');
const date2 = document.querySelector('.card2-content .date p');

bg2.addEventListener('click',()=>{
    Swal.fire({
        title: `${response[1].headline}`,
        text: `${response[1].content}`,
        imageUrl: `${response[1].image}`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
        
        confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> 
      `,
      });
})
date2.innerText = response[1].date;
bg2.style.backgroundImage = `url('${response[1].image}')`;   
author2.innerText = `by ${response[1].author}`;
title2.innerText = response[1].headline;
tag2.innerText =  response[1].type;






const tag3 = document.getElementById('tag-3');
const title3 = document.querySelector('.card3-content h2');
const author3 = document.querySelector('.card3-content h3');
const bg3 = document.querySelector('#card3');
const date3 = document.querySelector('.card3-content .date p');

bg3.addEventListener('click',()=>{
    Swal.fire({
        title: `${response[2].headline}`,
        text: `${response[2].content}`,
        imageUrl: `${response[2].image}`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
        
        confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> 
      `,
      });
})
date3.innerText = response[2].date;
bg3.style.backgroundImage = `url('${response[2].image}')`;   
author3.innerText = `by ${response[2].author}`;
title3.innerText = response[2].headline;
tag3.innerText =  response[2].type;2
     





const tag4 = document.getElementById('tag-4');
const title4 = document.querySelector('.card4-content h2');
const author4 = document.querySelector('.card4-content h3');
const bg4 = document.querySelector('#card4');
const date4 = document.querySelector('.card4-content .date p');3


bg4.addEventListener('click',()=>{
    Swal.fire({
        title: `${response[3].headline}`,
        text: `${response[3].content}`,
        imageUrl: `${response[3].image}`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
        
        confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> 
      `,
      });
})
date4.innerText = response[3].date;
bg4.style.backgroundImage = `url('${response[3].image}')`;   
author4.innerText = `by ${response[3].author}`;
title4.innerText = response[3].headline;
tag4.innerText =  response[3].type;






const cards = document.querySelector('.card-scroller');
cards.innerHTML = "";
for(let i =4;i<response.length;i++){

cards.innerHTML += `

<div class="right-card1"  >
    <div class="photo"  ></div>
    <div class="subcard-content">
        <h2 data-id = ${i} >${response[i].headline}</h2>
        <div class="date">
            <i class="fa-regular fa-calendar"></i>
            <p>${response[i].date}</p>
        </div>
    </div>
</div>
`;



}



const leftimages = document.querySelectorAll('.photo');
var j =3
leftimages.forEach((c)=>{
    j++;
    c.style.backgroundImage = `url('${response[j].image}')`;
})



const child = document.querySelectorAll('.subcard-content');
var i = 4;
child.forEach((child)=>{
  child.addEventListener('click',(event)=>{
    const index = event.target.getAttribute("data-id")
    

    Swal.fire({
      title: `${response[index].headline}`,
      text: `${response[index].content}`,
      imageUrl: `${response[index].image}`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: `
      <i class="fa fa-thumbs-down"></i>
    `,
      
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> 
    `,
    });
  })
})


})



