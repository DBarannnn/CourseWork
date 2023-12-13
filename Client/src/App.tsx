import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './components/common/Layout'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<About />}/>
      <Route
      path='/register' 
      element={<Register />} 
      />
      <Route 
      path='/login'
      element={<Login />}
      />
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
