/* Reducer structure
 *   action & oldState > Reducer(pure Function(Action) define newState) > oldState = newState
 */
type typeOptions = 'INCREMENT' | 'PLUS' | 'DECREMENT'

interface Action {
    // El state nunca se modifica directamente
    // funcion pura para modificar el state
    type: typeOptions;
    payLoad?: any;
}

interface Reducer<T> {
    // receive action and oldState
    (oldState: T,action?: Action): T
    /* T no es de type any, is the same type entered */;
}

let countReducer: Reducer<number> = (state: number = 0, action?: Action) => {
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

const actionReducer: Action = {
    type: "INCREMENT"
};
const actionDecrement: Action = {
    type: "DECREMENT"
};
const actionPlus: Action = {
    type: "PLUS",
    payLoad: 10 /** Uso de payload */
};
console.log(countReducer(10)); /** 10 Al no encontrar el type retorna state por defecto */
console.log(countReducer(10, actionReducer)); /** 11 */
console.log(countReducer(10, actionDecrement));
console.log(countReducer(10, actionPlus)); /** 20 usando el payLoad*/
