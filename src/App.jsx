import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import Item from './pages/item/ItemDetailPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/item/:id' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
