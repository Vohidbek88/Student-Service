
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Profile from './components/Profile'
import Regsiter from './components/Regsiter'
import Login from './components/Login'
import { useContext, useEffect } from 'react'
import { ServicesContext } from './context'
import axios from './api'
import CategoryOne from './pages/CategoryOne'
import SubCategory from './pages/SubCategory'
import Nabar from './components/Nabar'
function App() {

  const { setUser, userData } = useContext(ServicesContext)

  useEffect(() => {
    let id = localStorage.getItem('user_id')
    async function getUserId() {
      document.body.style.opacity = '0.11'
      try {
        const userres = await axios.get(`/user/student-detail/${id}/`);
        console.log(userres.data);
        setUser(userres.data)
        document.body.style.opacity = '1'
      } catch (error) {
        console.log(error);
        document.body.style.opacity = '1'

      }
    }

    if (id != undefined) {
      getUserId()
    }

  }, [])

  const categSubArray = [
    {
      id: 1,
      path: '/innovat1'
    },
    {
      id: 2,
      path: '/innovat2'
    },
    {
      id: 3,
      path: '/innovat3'
    }
  ]
  const categArray = [
    {
      id: 1,
      path: '/gpa'
    },
    {
      id: 2,
      path: '/xorijiytil'
    },
    {
      id: 3,
      path: '/xalaroit'
    },
    {
      id: 4,
      path: '/mahaliyhakaton'
    },
    {
      id: 5,
      path: '/umumiy1'
    },
    {
      id: 6,
      path: '/umumiy2'
    }
  ]

  return (
    <>
      <Navbar />
      {/* <Nabar/> */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Regsiter />} />
        <Route path='/login' element={<Login />} />
        {
          categArray.map(item => (<Route key={item.id} path={item.path} element={<CategoryOne id={item.id} />} />))
        }
        {
          categSubArray.map(item => <Route key={item.id} path={item.path} element={<SubCategory id={item.id} />} />)
        }
      </Routes>
    </>
  )
}

export default App
