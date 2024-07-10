
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ServicesContext } from '../context';

const Navbar = () => {

  const [status, setStatus] = useState(true);

  const menuOpen = () => {
    setStatus(!status)
  }
  const menuClose = () => {
    setStatus(!status)
  }

  const { userData } = useContext(ServicesContext);
  return (
    <div className='container'>
      <div className="navbar mobile">
        <div id="student-page">
          <NavLink className={'logo'} to={'/'}>Student.Service<i class="fa-solid fa-briefcase"></i></NavLink>
        </div>
        {
          !status && <>
          <div className="nav-item" id="dashboard">
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className="nav-item" id="dashboard">
          <NavLink to={'/dashboard'}>Dashborad</NavLink>
        </div>

        <div className={`nav-item dropdown ${userData != null ? 'd-block' : 'd-none'}`} id="documents">
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
          </>
        }
        <div className='menuBar'>
          {
            status ? <svg className='menu' onClick={menuOpen} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg> : <svg onClick={menuClose} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
          }
        </div>
      </div>
      <div className="navbar">
        <div className="nav-item" id="student-page">
          <NavLink className={'logo'} to={'/'}>Student.Service <i class="fa-solid fa-briefcase"></i></NavLink>
        </div>
        <div className="nav-item" id="dashboard">
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className="nav-item" id="dashboard">
          <NavLink to={'/dashboard'}>Dashborad</NavLink>
        </div>

        <div className={`nav-item dropdown ${userData != null ? 'd-block' : 'd-none'}`} id="documents">
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