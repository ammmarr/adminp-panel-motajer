import { createSlice } from '@reduxjs/toolkit'
import { staticData } from '../staticData/Data';
import { Feature } from '../types/types';

// Slice


const popUpSlice = createSlice({
    name: 'featuresSlice',
    initialState: {features: staticData,
    currentFeatureToEdit: {}
},
    reducers: {
        setCurrentFeatureToEdit: (state, action) => {
           state.currentFeatureToEdit = action.payload
        },
        setFeatures:(state,action) =>{
            state.features = action.payload
        }
    },
});
export const {setCurrentFeatureToEdit,setFeatures} = popUpSlice.actions
export default popUpSlice.reducer