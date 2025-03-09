/**
 * Write your challenge solution here
 */

const colorbutton = document.getElementById('color-buttons')
const changecolor = document.getElementById('mainHeading')
const red = document.getElementById('redButton')
const green = document.getElementById('greenButton')
const blue = document.getElementById('blueButton')
const purple = document.getElementById('purpleButton')
const reset = document.getElementById('resetButton')


red.addEventListener('click', () => {
    changecolor.style.color = 'red'
})

green.addEventListener('click', () => {
    changecolor.style.color = 'green'
})

blue.addEventListener('click', () => {
    changecolor.style.color = 'blue'
})

purple.addEventListener('click', () => {
    changecolor.style.color = 'purple'
})

reset.addEventListener('click', () => {
    changecolor.style.color = ''
})

