import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Home, Login } from '../components'
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
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
