import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Login } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Login />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}
