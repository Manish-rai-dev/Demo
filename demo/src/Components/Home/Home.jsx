import "./Home.css";
import Logo from "../Footer/image/logo.png"
import Middle from "../Middle/Middle";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
const Home = () => {
  return (
    <>
    {/* Navbar */}
    <div className="NavbarMain">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link"><img src ={Logo} className="logoHead" height={20} alt="" /></a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">FreeZone </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Offshore</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Mainland</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Pro Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Banks</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact Us</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Other Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link btnContainer">Get in touch</a>
        </li>
      </ul>
    </nav>
    </div>
    <div className="MiddleContainer">
        <Main/>
        <Middle></Middle>
    </div>

        <Footer></Footer>
    
    </>
  )
}

export default Home