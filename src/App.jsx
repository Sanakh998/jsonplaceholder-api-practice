import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Posts from './Pages/Posts'
import Users from "./Pages/Users"
import Todos from './Pages/Todos'
import UserDetails from './Pages/UserDetails'
import PostDetails from './Pages/PostDetails'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/posts" element={<Posts/>}/>  
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
