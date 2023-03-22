import { configureStore, current,  } from "@reduxjs/toolkit";
import featureSlice from "./featureSlice";

const store = configureStore({
    reducer:{
       features: featureSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>




export default store