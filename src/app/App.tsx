import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail, Header, Home, Login } from '../components'
import { Provider } from 'react-redux'
import { store } from '@/redux'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Login />} path='/' />
          <Route element={<Home />} path='/home' />
          <Route element={<Detail />} path='/detail/:id' />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
