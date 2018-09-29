const initialState = {
    daily_target: 3000,
    current_cal: 0,
    //foodsの中身はDBと連携するべし
    foods: 
        {
            name: 'ramen',
            calory: 700,
        }
}

const reducer = function reducer(state, action) {
    if (!state || !action.type) {
        state = initialState;
        return state;   
    } 
    switch (action.type) {
        case action.type:
            return {
                foods: {
                    name: action.type,
                    calory: action.calory
                },
                current_cal: state.current_cal + action.calory,
                daily_target: state.daily_target
            };
        default:
            return initialState
    }
}

export default reducer;