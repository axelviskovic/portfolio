const arrowContainer=document.querySelector('.arrowContainer')
const scrollArrowBackground=document.querySelector('.scrollArrowBackground')
const arrowScroll=document.querySelector('#arrowScroll')
const scrollText=document.querySelector('.arrowContainer h3')
const header=document.querySelector('header')
const body=document.querySelector('body')


// TAB LIST

const portfolioTab=document.querySelector('#portfolioTab')
const contactTab=document.querySelector('#contactTab')

portfolioTab.addEventListener(
  'click',
  ()=>{
    window.scroll(0,innerHeight)
  }
)


// ARROW

arrowContainer.addEventListener(
  'mouseenter',
  ()=>{
    scrollArrowBackground.style.bottom='0%'
    scrollArrowBackground.style.borderRadius='0%'
    scrollText.style.color='black'
    arrowScroll.style.borderLeft='1px solid black'
    arrowScroll.style.borderBottom='1px solid black'
  }
)
arrowContainer.addEventListener(
  'mouseleave',
  ()=>{
    scrollArrowBackground.style.bottom='102%'
    scrollArrowBackground.style.borderRadius='100%'
    scrollText.style.color='white'
    arrowScroll.style.borderLeft='1px solid white'
    arrowScroll.style.borderBottom='1px solid white'
  }
)

// HEADER SCROLL

const scrollArrowContainer = document.querySelector('.scrollArrowContainer')

window.addEventListener(
  'scroll',
  ()=>{
    let scrolled=1.2-((window.scrollY)/innerHeight)
    header.style.opacity=scrolled+0.2
  }
)

scrollArrowContainer.addEventListener(
  'click',
  ()=>{
    window.scroll(0,innerHeight)
  }
)

// BUBULLES

header.addEventListener(
  'mousemove',
  (event)=>{
    let random=Math.floor(Math.random()*4)
    if(random==1){
      let scrolled=window.scrollY
      let x = event.clientX;
      let y = event.clientY;
      let bubble=document.createElement('bubble')
      bubble.classList.add('bubble')
      bubble.style.left=x+'px'
      bubble.style.top=scrolled+y+'px'
      bubble.style.animationDuration=2+(scrolled/500)+'s'
      body.appendChild(bubble)
      let miniBubbleCreation = setTimeout(miniBubble,100)
      function miniBubble(){
        let miniBubble=document.createElement('miniBubble')
        miniBubble.classList.add('miniBubble')
        miniBubble.style.left=x+5+'px'
        miniBubble.style.top=scrolled+y+'px'
        miniBubble.style.animationDuration=2+(scrolled/500)+'s'
        body.appendChild(miniBubble)
        let bubbleDisappearance=setTimeout(disappearance,3000)
        function disappearance(){
          bubble.remove()
          miniBubble.remove()
        }
      }
    }
  }
)

const portfolioContainer = document.querySelector('.portfolioContainer')

portfolioContainer.addEventListener(
  'click',
  (event)=>{
    let scrolled=window.scrollY
    let x = event.clientX;
    let y = event.clientY;
    let bubble=document.createElement('bubble')
    bubble.classList.add('bubble')
    bubble.style.left=x+'px'
    bubble.style.top=scrolled+y+'px'
    bubble.style.animationDuration=2+(scrolled/500)+'s'
    body.appendChild(bubble)
    let miniBubbleCreation = setTimeout(miniBubble,100)
    function miniBubble(){
      let miniBubble=document.createElement('miniBubble')
      miniBubble.classList.add('miniBubble')
      miniBubble.style.left=x+5+'px'
      miniBubble.style.top=scrolled+y+'px'
      miniBubble.style.animationDuration=2+(scrolled/500)+'s'
      body.appendChild(miniBubble)
      let bubbleDisappearance=setTimeout(disappearance,3000)
      function disappearance(){
        bubble.remove()
        miniBubble.remove()
      }
    }
  }
)

// PROJECT TITLE

const project = document.querySelectorAll('.project')
const titleProject=document.querySelectorAll('.titleProject')

for(let i=0;i<project.length;i++){
  project[i].addEventListener(
    'mouseenter',
    ()=>{
      titleProject[i].style.top='0%'
    }
  )
}
for(let i=0;i<project.length;i++){
  project[i].addEventListener(
    'mouseleave',
    ()=>{
      titleProject[i].style.top='75%'
    }
  )
}



//A
