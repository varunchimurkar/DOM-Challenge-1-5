/**
 * Write your challenge solution here
 */
const ndisplay = document.getElementById('nameDisplay')
const jdisplay = document.getElementById('jobDisplay')
const agedisplay = document.getElementById('ageDisplay')
const biodisplay = document.getElementById('bioDisplay')



nameInput.addEventListener('input', function () {
    ndisplay.textContent = nameInput.value;
})

jobInput.addEventListener('input', function () {
    jdisplay.textContent = jobInput.value;
})

ageInput.addEventListener('input', function () {
    agedisplay.textContent = ageInput.value;
})

bioInput.addEventListener('input', function () {
    biodisplay.textContent = bioInput.value;
})


