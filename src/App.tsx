import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Menu } from './components/Navbar'
import { Home } from './pages/home'
import { ToDo } from './pages/todo'
import { Contato }  from './pages/contacts'
import { Finance } from './pages/finance'


export function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/finance' element={<Finance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App