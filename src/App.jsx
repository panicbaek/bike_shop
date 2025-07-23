import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
    
    {/* Navbar/header */}
    <Header/>
    


    {/* Route */}
    <Routes>
      
      
      
      <Route path='*' element={<div><h1>오류</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus, quaerat ipsam vero accusamus id similique aliquid velit magnam voluptate minus, reprehenderit ex non sed corrupti, quae voluptatem necessitatibus?</p></div>} />
    </Routes>
    </>
  )
}

export default App
