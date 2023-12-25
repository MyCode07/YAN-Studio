// import "./static/side-fixed.js";
// import { accorden } from "./static/accordeon.js";
// import { maskInputs } from "./static/inputmask.js";
// import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";
// import { toTop } from "./static/to-top.js";
// import { stickyHeader } from "./parts/header.js";
// import './utils/smoothscrol.js';

import { animateAction, animateStaggerAction } from "./parts/animations.js";

animateStaggerAction();
animateAction();
// stickyHeader()
// toTop();
replaceDomElements();
// runTicker()
// accorden();
// maskInputs('+7 999 999 999 999', '.phone')

import "./parts/header.js";
import "./parts/menu.js";
