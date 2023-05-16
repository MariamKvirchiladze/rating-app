import star from "../assets/star.png";
import "./Rate.css";

export default function Rate(props) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="rate-div">
      <div className="star-div">
        <img src={star} alt="star" />
      </div>

      <h1>How did we do?</h1>
      <p className="gray-p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn-div">
        {buttons.map((item) => (
          <button
            onClick={() => props.setRate(item)}
            key={item}
            className={item === props.rate ? "active buttons" : "buttons"}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        className="submit"
        onClick={() => {
          if (props.rate) {
            props.setSubmit(true);
          }
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
