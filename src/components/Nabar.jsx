import React from 'react'
import '../assets/Navbar.css'
import { NavLink } from 'react-router-dom';
const Nabar = () => {

let navLinks = document.querySelector(".nav-links");

function menuOpenBtn() {
navLinks.style.left = "0";
}
 function menuCloseBtn() {
navLinks.style.left = "-100%";
}



 function htmlcssArrow() {
 navLinks.classList.toggle("show1");
}

 function moreArrow() {
 navLinks.classList.toggle("show2");
}
function moreArrow1(){
  navLinks.classList.toggle("show2");
}
function jsArrow() {
 navLinks.classList.toggle("show3");
}
  return (
    <nav>
  <div className="navbar">
    <i className="bx bx-menu" onClick={menuOpenBtn} />
    <div className="logo">
      <a href="#">CodingLab</a>
    </div>
    <div className="nav-links">
      <div className="sidebar-logo">
        <span className="logo-name">CodingLab</span>
        <i className="bx bx-x" onClick={menuCloseBtn}/>
      </div>
      <ul className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">Hujjatlar</a>
          <i className="bx bxs-chevron-down htmlcss-arrow arrow" onClick={htmlcssArrow} />
          <ul className="htmlCss-sub-menu sub-menu">
            <li>
            <NavLink to={'/gpa'}>GPA</NavLink>
            </li>
            <li className="more">
              <span>
              <NavLink>Ilmiy-ijodiy va innovatsion ishlar</NavLink>
                <i className="bx bxs-chevron-right arrow more-arrow" onClick={moreArrow}/>
              </span>
              <ul className="more-sub-menu sub-menu">
                <li>
                <NavLink to={'/innovat1'}>Axborot tizimi va resurslari yaratilishidagi ishtiroki</NavLink>
                </li>
                <li>
                <NavLink to={'/innovat2'}>Talabgorlarning ilmiy jurnallardagi maqolalari</NavLink>
                </li>
                <li>
                <NavLink to={'/innovat3'}>Mahalliy va xorijiy konferensiyalardagi tezislari</NavLink>
                </li>
              </ul>
            </li>
            <li>
            <NavLink to={'/xorijiytil'}>Xorijiy tillarni bilish darajasi</NavLink>
            </li>
            <li>
            <NavLink to={'/xalaroit'}>Xalqaro IT-sertifikat mavjudligi</NavLink>
            </li>
            <li>
            <NavLink to={'/mahaliyhakaton'}>Mahalliy va xorijiy hakaton yoki IT-tanlovlardagi ishtiroki</NavLink>
            </li>
            <li className="more">
              <span>
              <NavLink>Umumiy faoliyati</NavLink>
                <i className="bx bxs-chevron-right arrow more-arrow" onClick={moreArrow1}/>
              </span>
              <ul className="more-sub-menu sub-menu">
                <li>
                <NavLink to={'/umumiy1'}>Talabgor tomonidan yozilgan esse</NavLink>
                </li>
                <li>
                <NavLink to={'/umumiy2'}>Ijtimoiy faolligi (ma’naviy-ma’rifiy hamda turli xil <br /> yoshlar tadbirlarida  ishtiroki)</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">JAVASCRIPT</a>
          <i className="bx bxs-chevron-down js-arrow arrow " onClick={jsArrow} />
          <ul className="js-sub-menu sub-menu">
            <li>
              <a href="#">Dynamic Clock</a>
            </li>
            <li>
              <a href="#">Form Validation</a>
            </li>
            <li>
              <a href="#">Card Slider</a>
            </li>
            <li>
              <a href="#">Complete Website</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
    <div className="search-box">
      Profile
    </div>
  </div>
</nav>

  )
}

export default Nabar