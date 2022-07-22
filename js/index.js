import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonTimerUp,
  buttonTimerDown,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonFire,
  buttonCofee,
  buttonDay,
  buttonNight,
  mode,
  sliderForest,
  sliderCofee,
  sliderFire,
  sliderRain,
  sliderCel,
  backgroundForest,
  backgroundCofee,
  backgroundFire,
  backgroundRain
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonTimerUp,
  buttonTimerDown,
  buttonForest,
  buttonCofee,
  buttonFire,
  buttonRain,
  buttonDay,
  buttonNight,
  mode,
  sliderForest,
  sliderCofee,
  sliderFire,
  sliderRain,
  sliderCel,
  backgroundForest,
  backgroundCofee,
  backgroundFire,
  backgroundRain,
  buttonRain
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})
