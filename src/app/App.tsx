import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Login } from '../components'
import { Provider } from 'react-redux'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Login />} path='/' />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
