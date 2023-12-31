import './utils/smoothscrol.js';
import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";
import { animateAction, animateStaggerAction, animateSVGStaggerAction, ainmateFooterLogo } from "./parts/animations.js";
import { playVideoAction } from "./parts/video.js";
import { termsTabAction } from "./parts/term-tabs.js";
import "./parts/header.js";
import "./parts/menu.js";
import "./parts/forms.js";

playVideoAction();
animateStaggerAction();
animateAction();
animateSVGStaggerAction();
ainmateFooterLogo();
replaceDomElements();
termsTabAction();

maskInputs('+7 999 999 99 99', '[name="phone"]')