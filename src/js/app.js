
// import { maskInputs } from "./static/inputmask.js";

import './utils/smoothscrol.js';
import { replaceDomElements } from "./static/replace.js";
import { animateAction, animateStaggerAction, aniamteTrigger } from "./parts/animations.js";
import { playVideoAction } from "./parts/video.js";
import { termsTabAction } from "./parts/term-tabs.js";
import "./parts/header.js";
import "./parts/menu.js";
import "./parts/forms.js";

playVideoAction();
animateStaggerAction();
animateAction();
replaceDomElements();
aniamteTrigger();
termsTabAction();

// maskInputs('+7 999 999 999 999', '.phone')


