/* Reducer structure
 *   action & oldState > Reducer(pure Function(Action) define newState) > oldState = newState
 */

interface Action {
    // funcion pura para modificar el state
    type: string;
    payLoad?: any;
}

interface Reducer<T> {
    // receive action and oldState
    (oldState: T, action: Action): T; // No es de type any, is the same type entered
}

let reducer: Reducer<number> = (state: number = 0, action: Action) => {
    // logica para el new state
    return state;
};

console.log(reducer(0, null)) // 0