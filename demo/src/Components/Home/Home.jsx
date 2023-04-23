import "./Home.css";
import Middle from "../Middle/Middle";
const Home = () => {
  return (
    <>
    {/* Navbar */}
    <div className="NavbarMain">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Gallery</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Testimonials</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact Us</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">FAQs</a>
        </li>
      </ul>
    </nav>
    </div>
    <div className="MiddleContainer">
        <Middle></Middle>

    </div>
    </>
  )
}

export default Home