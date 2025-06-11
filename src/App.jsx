
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WordList from './components/WordList'
import NotFound from './components/NotFound'
import Completed from './components/Completed'

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WordList />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    
  </>
  )
}

export default App
