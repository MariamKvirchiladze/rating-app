import shape from "../assets/shape.png";
import "./Result.css";

export default function result(props) {
  return (
    <div className="result-div">
      <img src={shape} alt="shape" />
      <div className="results">
        <p className="orange-p">You selected {props.rate} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p className="gray-p center-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
