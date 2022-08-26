import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    stepNumber: 0,
    xIsNext: true,
  }

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
        updateHistory(state,action) {
            state.history = action.payload
        },
        updateXIsNext(state,action) {
            state.xIsNext = action.payload % 2 === 0 ? true : false
        },
        updateStepNumber(state,action) {
            state.stepNumber = action.payload
        }
    }
})

export const { updateHistory, updateXIsNext, updateStepNumber } = gameSlice.actions

export default gameSlice.reducer