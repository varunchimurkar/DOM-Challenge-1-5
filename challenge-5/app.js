/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


const carousel = document.getElementById('carousel')
const carouseltrack = document.getElementById('carouselTrack')
const caption = document.getElementById('caption')
const btnprev = document.getElementById('prevButton')
const btnnext = document.getElementById('nextButton')
const nav = document.getElementById('carouselNav')
const autoplaybtn = document.getElementById('autoPlayButton')
const timerdisplay = document.getElementById('timerDisplay')

let currentindex = 0

let activeindicator = null

let autoplayinter



function showimg() {

  carouseltrack.innerHTML = '' // Clear previous image

  const img = document.createElement('img')
  img.src = images[currentindex].url
  img.alt = images[currentindex].caption
  img.classList.add('carousel-slide')
  caption.textContent = images[currentindex].caption
  carouseltrack.appendChild(img)

}

showimg()

function indicators() {

  images.forEach((_, index) => {

    const div = document.createElement('div')
    div.classList.add('carousel-indicator')
    nav.appendChild(div)

    //By default is active & index = 0
    if (index === currentindex) {

      div.classList.add('active')
      activeindicator = div
    }

    div.addEventListener('click', () => {
      if (activeindicator) {
        activeindicator.classList.remove('active')
      }

      div.classList.add('active');
      activeindicator = div;
      currentindex = index;
      showimg();

    })
  })
}

indicators()

function update() {

  if (activeindicator) {
    activeindicator.classList.remove('active')
  }
  const newindicator = nav.children[currentindex]
  newindicator.classList.add('active')
  activeindicator = newindicator
}

function autoPlay() {

  let count = 3

  timerdisplay.textContent = `Next Slides in ${count}s`

  autoplayinter = setInterval(() => {

    count = count - 1

    if (count === 0) {

      if (activeindicator) {
        activeindicator.classList.remove('active')
      }

      currentindex = (currentindex + 1) % images.length
      showimg()

      const newindicator = nav.children[currentindex]
      newindicator.classList.add('active')
      activeindicator = newindicator
      count = 3
    }

    timerdisplay.textContent = `Next Slides in ${count}s`

  }, 2000)

  autoplaybtn.textContent = `Stop Auto Play`
}

function stopautoplay() {
  clearInterval(autoplayinter)
  autoplaybtn.textContent = `Start Auto Play`
}

autoplaybtn.addEventListener('click', () => {

  if (autoplayinter) {

    stopautoplay()
    timerdisplay.textContent = ''
    autoplayinter = null

  } else {
    autoPlay()
  }
})


btnprev.addEventListener('click', () => {
  currentindex = (currentindex - 1 + images.length) % images.length
  showimg()
  update();

})

btnnext.addEventListener('click', () => {
  currentindex = (currentindex + 1) % images.length
  showimg()
  update();
})



//nav.children[currentindex]

/* 
nav = container of the dots

nav.children = list of all the dot elements

nav.children[index] = the dot for image at index */