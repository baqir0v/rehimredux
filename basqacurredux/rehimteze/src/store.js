import {configureStore} from "@reduxjs/toolkit"
import rehimnecesen from './saybolucu'

export const maqazin = configureStore({
    reducer:{
        sayci:rehimnecesen
    }
})