import "./Footer.css";
import logo from "./image/logo.png";

export default function Footer() {
  const quickLinks = [
    {
      id: 1,
      title: "Free Zone",
    },
    {
      id: 2,
      title: "Offshore",
    },
    {
      id: 3,
      title: "Mainland",
    },
    {
      id: 4,
      title: "Pro Services",
    },
    {
      id: 5,
      title: "Banks",
    },
    {
      id: 6,
      title: "Other Services",
    },
  ];

  return (
    <div className="footer">
      <div className="column-1">
        <div className="logo header">
          <img src={logo} alt="logo" />
        </div>
        <div className="about">
          Lorem ipsum is a dummy text to fill the empty content area in website
        </div>
      </div>
      <div className="column-2">
        <div className="header">Quick Links</div>
        {quickLinks.map((link) => (
          <div className="link" key={link.id}>
            <div className="red-dot"></div> {link.title}
          </div>
        ))}
      </div>
      <div className="column-3">
        <div className="header">Contact</div>
        <div className="info">Phone: +971800300</div>
        <div className="info">Email: info@onezonee.com</div>
        <div className="info">Address: Lorem Ipsum Dummy</div>
      </div>
    </div>
  );
}