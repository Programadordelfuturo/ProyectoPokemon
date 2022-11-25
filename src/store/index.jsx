import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slice/name.slice'

export default configureStore({
  reducer: {
    name: nameSlice
	}
})