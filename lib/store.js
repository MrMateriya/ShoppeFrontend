import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'

// const makeStore = () => {
//   return configureStore({
//     reducer: {
//       userReducer: userReducer,
//     },
//   })
// }

// export {makeStore}

//Сделал общим, чтобы использовать хранилище не только в компонентах дочерних провайдера
const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
})

export {store}