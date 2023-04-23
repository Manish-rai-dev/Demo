import "./Middle.css";
import Thinking from "./thinking.jpg";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Relax from "./relax.jpg";
const Middle = () => {
  return (
    <>
    
    <p className="oneZone">
        Why One Zone
    </p>
    
    <p className="textBelow">
        we provide the simplest solution to your business challenge.
    </p>
    <div className=" grid grid-cols-4 gap-4 containerBoxes">
      
            <div className=" boxes">
                    Lowest Price Gurantee
            </div>
            <div className=" boxes">
                Quick License Issuance
                </div>
                <div className=" boxes">
                One-Stop-Shop solutions
                </div>
                <div className=" boxes">
                Zero Service Fees
                </div>
     
    </div>
    <div className="HowWorks">
    <p className="oneZone">
        How it Works
    </p>
    
    <p className="textBelow">
        we provide the simplest solution to your business challenge.
    </p>
    <div className="lowerContainer grid">
        <div className="cols-5">
            <img src={Thinking} alt="" />
        </div>
        <div className="cols-5">
<div className="hoboxes row">Step 1 
<div className="row shortText">Get a quick detailed quote</div>
</div>
<div className="hoboxes"> Step 2
<div className="row shortText">Get a quick detailed quote</div>
</div>
<div className="hoboxes"> Step 3
<div className="row shortText">Get a quick detailed quote</div>
</div>
        </div>

    </div>
    </div>

    <div className="Business">
    <p className="oneZone">
        You are in Business Now
    </p>
    
    <p className="textBelow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique laudantium quisquam distinctio dolor mollitia, repellendus hic in ratione accusantium ex dolorum eligendi accusamus esse voluptas asperiores, soluta optio ipsam.
    </p>

    


<div className="grid grid-cols-2 gap-2">
    <span className="  cardIconized">My company is incorporated</span>
    <span className="  cardIconized">My UAE vissa is issued</span>
    </div>
    <div className="grid grid-cols-2">
    <span className="cardIconized">My company is incorporated</span>
    <span className="cardIconized">My UAE vissa is issued</span>
    </div>
    <div  className="center">
    <div className="cardIconized textCenter">My UAE vissa is issued</div>
    </div>

    </div>

    <div className="relaxImage">
        <img src={Relax} className="imageMargins"  width={1200}alt="noimage" />
        <div className="containerAboveImage">
            <div className="center">
            <div className="textContainer">
            Do not play in the hands of confusion
            <div className="marginL5"> and lack of transparency </div>
            </div>
            
            </div>
            <div className="center">
            <div className="textContainerlight">
         We gurantee clarity and transparency !
            </div>
            </div>
            <div className="center">
            <div className="btnContainer">
            Get a Quote
            </div>
            </div>
        </div>
    </div>
    <div className="formContainer">
        <div className="mainForm">
            <div className="FormHeader">
            <p className="oneZone">
        Let Talk
    </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Middle