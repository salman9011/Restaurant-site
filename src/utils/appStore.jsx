import { configureStore } from "@reduxjs/toolkit"
//lets add slices to it
import cartReducer from "./cartSlice" // this is the samll reducer of cart slice//

const appStore = configureStore({
    reducer :{
        cart :cartReducer
        //we can add multiple reducers here like userReducer
    }
}

)

export default appStore