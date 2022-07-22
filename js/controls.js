import { 
  backgroundForest,
  backgroundCofee,
  backgroundRain,
  backgroundFire
} from "./elements.js"

export default function Controls({
  buttonPause,
  buttonPlay,
  buttonTimerUp,
  buttonTimerDown,
  buttonForest,
  buttonFire,
  buttonRain,
  buttonCofee,
  buttonDay,
  buttonNight,
  mode
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonTimerUp.classList.add('hide')
    buttonTimerDown.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonTimerUp.classList.remove('hide')
    buttonTimerDown.classList.remove('hide')
  }
  
  function changeDay() {
    buttonDay.classList.remove('hide')
    buttonNight.classList.add('hide')
    mode.classList.add('dark')
  }
  
  function changeNight() {
    buttonDay.classList.add('hide')
    buttonNight.classList.remove('hide')
    mode.classList.remove('dark')
  }
  
  function forest(){
      buttonForest.classList.add('focus')
      buttonFire.classList.remove('focus')
      buttonRain.classList.remove('focus')
      buttonCofee.classList.remove('focus')
      document.getElementById("sliderCel").style.visibility = "visible";
      document.getElementById("sliderForest").style.visibility = "visible";
      document.getElementById("sliderRain").style.visibility = "hidden";
      document.getElementById("sliderFire").style.visibility = "hidden";
      document.getElementById("sliderCofee").style.visibility = "hidden";
      backgroundForest.classList.remove('hide');
      backgroundFire.classList.add('hide');
      backgroundCofee.classList.add('hide');
      backgroundRain.classList.add('hide');
    }

  function fire(){
      buttonFire.classList.add('focus')
      buttonForest.classList.remove('focus')
      buttonRain.classList.remove('focus')
      buttonCofee.classList.remove('focus')
      document.getElementById("sliderCel").style.visibility = "visible";
      document.getElementById("sliderFire").style.visibility = "visible";
      document.getElementById("sliderForest").style.visibility = "hidden";
      document.getElementById("sliderRain").style.visibility = "hidden";
      document.getElementById("sliderCofee").style.visibility = "hidden";
      backgroundFire.classList.remove('hide');
      backgroundForest.classList.add('hide');
      backgroundCofee.classList.add('hide');
      backgroundRain.classList.add('hide');
    }

  function rain(){
      buttonRain.classList.add('focus')
      buttonForest.classList.remove('focus')
      buttonFire.classList.remove('focus')
      buttonCofee.classList.remove('focus')
      document.getElementById("sliderCel").style.visibility = "visible";
      document.getElementById("sliderRain").style.visibility = "visible";
      document.getElementById("sliderFire").style.visibility = "hidden";
      document.getElementById("sliderForest").style.visibility = "hidden";
      document.getElementById("sliderCofee").style.visibility = "hidden";
      backgroundRain.classList.remove('hide');
      backgroundForest.classList.add('hide');
      backgroundFire.classList.add('hide');
      backgroundCofee.classList.add('hide');
    }

  function cofee(){
      buttonCofee.classList.add('focus')
      buttonForest.classList.remove('focus')
      buttonRain.classList.remove('focus')
      buttonFire.classList.remove('focus')
      document.getElementById("sliderCel").style.visibility = "visible";
      document.getElementById("sliderCofee").style.visibility = "visible";
      document.getElementById("sliderFire").style.visibility = "hidden";
      document.getElementById("sliderForest").style.visibility = "hidden";
      document.getElementById("sliderRain").style.visibility = "hidden";
      backgroundCofee.classList.remove('hide');
      backgroundForest.classList.add('hide');
      backgroundFire.classList.add('hide');
      backgroundRain.classList.add('hide');
    }

  return {
    reset,
    play,
    pause,
    forest,
    rain,
    fire,
    cofee,
    changeDay,
    changeNight
  }
}