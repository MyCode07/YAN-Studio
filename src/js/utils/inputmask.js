import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "+7 (999) 999-99-99",
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('input[name="phone"]');