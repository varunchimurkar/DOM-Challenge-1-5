/**
 * Write your challenge solution here
 */

const toggleButtonn = document.getElementById('toggleButton')
const status1 = document.getElementById('status')
const bulbb = document.getElementById('bulb')

toggleButtonn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');
    bulbb.classList.toggle('off');

    if (document.body.classList.contains('dark-mode')) {

        status1.innerText = 'status : ON'
        toggleButtonn.innerText = 'TURN ON'

    } else {

        status1.innerText = 'status : OFF'
        toggleButtonn.innerText = 'TURN OFF'
    }
})
