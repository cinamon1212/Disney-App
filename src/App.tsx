import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}
