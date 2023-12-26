// import "./static/side-fixed.js";
// import { accorden } from "./static/accordeon.js";
// import { maskInputs } from "./static/inputmask.js";
// import { runTicker } from "./static/ticker.js";
// import { toTop } from "./static/to-top.js";
// import { stickyHeader } from "./parts/header.js";
import './utils/smoothscrol.js';
import { replaceDomElements } from "./static/replace.js";
import { animateAction, animateStaggerAction, aniamteTrigger } from "./parts/animations.js";
import { playVideoAction } from "./parts/video.js";
import "./parts/header.js";
import "./parts/menu.js";

playVideoAction();
animateStaggerAction();
animateAction();
replaceDomElements();
aniamteTrigger();

// stickyHeader()
// toTop();
// runTicker()
// accorden();
// maskInputs('+7 999 999 999 999', '.phone')


