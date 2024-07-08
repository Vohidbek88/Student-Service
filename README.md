# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


http://api.edu-sts.uz:8030/api/v1/user/student-list/id



//


import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ServicesContext } from '../context';

const Navbar = () => {

  const { userData } = useContext(ServicesContext);
  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav-item" id="student-page">
          <NavLink className={'logo'} to={'/'}>Student.Service</NavLink>
        </div>
        <div className="nav-item" id="dashboard">
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className="nav-item" id="dashboard">
          <NavLink to={'/dashboard'}>Dashborad</NavLink>
        </div>
      
        <div  className={`nav-item dropdown ${userData!=null ? 'd-block':'d-none'}`} id="documents">
          <NavLink>Hujjatlar</NavLink>
          <div className="dropdown-content">
            <NavLink to={'/gpa'}>GPA</NavLink>
            <div className="dropdown-submenu">
              <NavLink>Ilmiy-ijodiy va innovatsion ishlar</NavLink>
              <div className="dropdown-content-submenu">
                <NavLink to={'/innovat1'}>Axborot tizimi va resurslari yaratilishidagi ishtiroki</NavLink>
                <NavLink to={'/innovat2'}>Talabgorlarning ilmiy jurnallardagi maqolalari</NavLink>
                <NavLink to={'/innovat3'}>Mahalliy va xorijiy konferensiyalardagi tezislari</NavLink>
              </div>
            </div>
            <NavLink to={'/xorijiytil'}>Xorijiy tillarni bilish darajasi</NavLink>
            <NavLink to={'/xalaroit'}>Xalqaro IT-sertifikat mavjudligi</NavLink>
            <NavLink to={'/mahaliyhakaton'}>Mahalliy va xorijiy hakaton yoki IT-tanlovlardagi ishtiroki</NavLink>
            <div className="dropdown-submenu">
              <NavLink>Umumiy faoliyati</NavLink>
              <div className="dropdown-content-submenu">
                <NavLink to={'/umumiy1'}>Talabgor tomonidan yozilgan esse</NavLink>
                <NavLink to={'/umumiy2'}>Ijtimoiy faolligi (ma’naviy-ma’rifiy hamda turli xil yoshlar tadbirlarida  ishtiroki)</NavLink>
              </div>
            </div>
          </div>
        </div>
        {
          userData != null ? <>
          <div className="nav-item" id="profile">
            <NavLink to={'/profile'}>Profil</NavLink>
          </div>
          </> : 
         <>
          <div className="nav-item" id="login">
            <NavLink to={'/login'}>Login</NavLink>
          </div>
          <div className="nav-item" id='register'>
          <NavLink to={'/register'}>
              Register
            </NavLink>
          </div>
         </>
        }

      </div>

    </div>
  )
}

export default Navbar