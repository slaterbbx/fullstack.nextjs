import { createActions, handleActions } from 'redux-actions';

const InitialState = {
  count: 0
}

// redux-actions removes some pain points with redux / react
export const { countIncrement, countDecrement} = createActions({
    COUNT_INCREMENT: amount => ({ amount }),
    COUNT_DECREMENT: amount => ({ amount }),
});

export const reducer = handleActions(
    {
        [countIncrement]: ( state, { payload: { amount } }) => ({
            ...state,
            count: state.count + amount
        }),
        [countDecrement]: ( state, { payload: { amount } }) => ({
            ...state,
            count: state.count - amount
        })
    },
    
    InitialState
)
