const initialState = {
    daily_target: 3000,
    current_cal: 0,
    //foodsの中身はDBと連携するべし
    foods: {
        ramen: 'ramen',
        onigiri: 'onigiri',
        burger: 'burger',
        pan: 'pan',
        milk: 'milk',
        lunch: 'lunch',
        curry: 'curry',
        don: 'don'
    }
}

const reducer = function reducer(state = initialState, action) {
    if (!state) {
        state = initialState;
        return state;
    }
    switch (action.type) {
        case 'ramen':
            return {
                current_cal: state.current_cal + 700,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'onigiri':
            return {
                current_cal: state.current_cal + 200,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'burger':
            return {
                current_cal: state.current_cal + 600,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'pan':
            return {
                current_cal: state.current_cal + 200,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'milk':
            return {
                current_cal: state.current_cal + 300,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'lunch':
            return {
                current_cal: state.current_cal + 800,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'curry':
            return {
                current_cal: state.current_cal + 700,
                daily_target: state.daily_target,
                foods: initialState.foods
            };
        case 'don':
            return {
                current_cal: state.current_cal + 600,
                daily_target: state.daily_target,
                foods: initialState.foods
            }; 
        default:
            return state
    }
}

export default reducer;