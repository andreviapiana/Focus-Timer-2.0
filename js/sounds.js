import {
    sliderCel,
    sliderForest,
    sliderFire,
    sliderRain,
    sliderCofee
} from "./elements.js"

export default function() {

    const buttonPressAudio = new Audio("sound/button-press.wav")
    const kitchenTimer = new Audio("sound/kichen-timer.mp3")
    const audioForest = new Audio("sound/Floresta.wav")
    const audioRain = new Audio("sound/Chuva.wav")
    const audioFire = new Audio("sound/Lareira.wav")
    const audioCofeeHouse = new Audio("sound/Cafeteria.wav")
    audioForest.loop = true
    audioRain.loop = true
    audioFire.loop = true
    audioCofeeHouse.loop = true

    function pressButton() {
      buttonPressAudio.play()
    }
    
    function timeEnd() {
      kitchenTimer.play()
    }

    sliderCel.addEventListener('input', () => {
      audioForest.volume = sliderCel.value / 100
      audioFire.volume = sliderCel.value / 100
      audioRain.volume = sliderCel.value / 100
      audioCofeeHouse.volume = sliderCel.value / 100
    })

    sliderForest.addEventListener('input', () => {
      audioForest.volume = sliderForest.value / 100
    })

    sliderFire.addEventListener('input', () => {
      audioFire.volume = sliderFire.value / 100
    })

    sliderRain.addEventListener('input', () => {
      audioRain.volume = sliderRain.value / 100
    })

    sliderCofee.addEventListener('input', () => {
      audioCofeeHouse.volume = sliderCofee.value / 100
    })

    function soundForest() {
      audioForest.play();
      audioRain.pause();
      audioCofeeHouse.pause();
      audioFire.pause();
    }

    function soundRain() {
      audioForest.pause();
      audioRain.play();
      audioCofeeHouse.pause();
      audioFire.pause();
    }

    function soundCofeeHouse() {
      audioForest.pause();
      audioRain.pause();
      audioCofeeHouse.play();
      audioFire.pause();
    }

    function soundFire() {
      audioForest.pause();
      audioRain.pause();
      audioCofeeHouse.pause();
      audioFire.play();
    }

    function soundPause() {
      audioForest.pause();
      audioRain.pause();
      audioCofeeHouse.pause();
      audioFire.pause();
    }

    return {
        pressButton,
        timeEnd,
        soundForest,
        soundRain,
        soundCofeeHouse,
        soundFire,
        soundPause
    }
}

