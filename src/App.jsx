import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Suspense, useEffect } from 'react'
import Login from './pages/Login'
import MainPage from './pages/MainPage'
import Community from './pages/Community'
import Download from './pages/Download'
import Information from './pages/Information'
import Sponsorship from './pages/Sponsorship'

function App() {
  // page배열방
  const pageList = useLocation();
  const arr = ['/login']
  const arr2 = ['/download', '/community', '/information', '/sponsorship', ]
  
  console.log(pageList.pathname)
  return (
    <>
    {
      arr.includes(pageList.pathname) ?
      ''
      :
      <>
        <Header/>
        <Sidebar/>
        {!arr2.includes(pageList.pathname) && <MainPage/>}
      </>
    }

    <Suspense fallback={<div><h1>Loading</h1></div>}> 
    {/* Route */}
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/information' element={<Information/>}/>
      <Route path='/sponsorship' element={<Sponsorship/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/companyintroduction' element={0}/>
      <Route path='/download' element={<Download/>}/>
      
      
      {/* 404 */}
      {/* <Route path='*' element={<div><h1>404</h1><h1>error</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat doloribus, quaerat ipsam vero accusamus id similique aliquid velit magnam voluptate minus, reprehenderit ex non sed corrupti, quae voluptatem necessitatibus?</p></div>} /> */}
    </Routes>
    </Suspense>
    </>
  )
}

export default App
