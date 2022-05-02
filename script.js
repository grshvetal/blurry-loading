const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

let intervalID = setInterval(loadPlus, 30)

function loadPlus() {
    load++
     if (load >= 100) {
        clearInterval(intervalID)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)})`
   
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
