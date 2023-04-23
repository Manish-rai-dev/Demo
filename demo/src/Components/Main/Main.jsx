import main from "./main.png";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${main})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "75vh",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        className="main"
      >
        <div className="backdrop">
          <div className="text1">Kick Start your Buisness in UAE Today!</div>
          <div className="text2">
            We guarantee the lowest price and the best services.
          </div>
          <div className="button">Get a Quote</div>
        </div>
      </div>
      <div className="banner">
        <div className="stat">
          <div className="number">10,000+</div>
          <div className="text">Clients</div>
        </div>
        <div className="stat">
          <div className="number">35,000+</div>
          <div className="text">Consultants</div>
        </div>
        <div className="stat">
          <div className="number">4.9/5*</div>
          <div className="text">Ratings</div>
        </div>
      </div>
    </>
  );
}