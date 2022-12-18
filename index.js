
let movies = [
    {
        name: 'Fast and Furious 9',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis odit dolorem aperiam laboriosam, libero unde minima architecto asperiores ut.",
        image: "images/fastfurious.jpg"
    },
    {
        name: 'Encanto',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis odit dolorem aperiam laboriosam, libero unde minima architecto asperiores ut.",
        image: "images/encanto.jpg",
    },
    {
        name: 'The avengers',
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis odit dolorem aperiam laboriosam, libero unde minima architecto asperiores ut.",
        image: "images/avengers1.jpg",
    },
    {
        name: "Loki",
        des: "aLorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis odit dolorem aperiam laboriosam, libero unde minima architecto asperiores ut.",
        image: "images/slider 1.png",
    },
    {
        name: "Interstellar",
        des: "aLorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis odit dolorem aperiam laboriosam, libero unde minima architecto asperiores ut.",
        image: "images/interstellar.jpg",
    },
    ];
const carousel = document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; //track current slide
const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create dom elements
    let slide =document.createElement('div'); 
    let imgElement =document.createElement('img'); 
    let content=document.createElement('div'); 
    let h1=document.createElement('h1'); 
    let p=document.createElement('p'); 

    //attach elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //set up images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    //set up class names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100*(sliders.length - 2)}% - ${30*(sliders.length - 2)}px)`
    }
    }
for (let i=0;i<3;i++)
{
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

//video animations
const videoCards = [...document.querySelectorAll('.videocard')];
videoCards.forEach(item => {
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play()
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

//video card sliders
let cardContains = [...document.querySelectorAll('.cardcontain')];
let prevbtns = [...document.querySelectorAll('.prevbtn')];
let nextbtns = [...document.querySelectorAll('.nxtbtn')];

cardContains.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nextbtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth-200;
    });
    prevbtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    });
});
