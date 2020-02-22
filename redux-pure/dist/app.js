"use strict";
let countReducer = (state = 0, action) => {
    // logica para el new state
    // por defecto siempre retorna el state
    if (!action) {
        return state;
    }
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
            break;
        case "DECREMENT":
            return state - 1;
            break;
        case "PLUS":
            return state + action.payLoad;
            break;
        default:
            return state;
            break;
    }
};
const actionReducer = {
    type: "INCREMENT"
};
const actionDecrement = {
    type: "DECREMENT"
};
const actionPlus = {
    type: "PLUS",
    payLoad: 10 /** Uso de payload */
};
console.log(countReducer(10)); /** 10 Al no encontrar el type retorna state por defecto */
console.log(countReducer(10, actionReducer)); /** 11 */
console.log(countReducer(10, actionDecrement));
console.log(countReducer(10, actionPlus)); /** 20 usando el payLoad*/
