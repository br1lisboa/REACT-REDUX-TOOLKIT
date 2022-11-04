import { createSlice } from '@reduxjs/toolkit'

export const templateSlice = createSlice({

    name: 'value',

    initialState: {
        value: 1
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment } = templateSlice.actions