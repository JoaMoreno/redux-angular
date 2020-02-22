"use strict";
/* Reducer structure
 *   action & oldState > Reducer(pure Function(Action) define newState) > oldState = newState
 */
let reducer = (state = 0, action) => {
    // logica para el new state
    return state;
};
console.log(reducer(32)); // 0
