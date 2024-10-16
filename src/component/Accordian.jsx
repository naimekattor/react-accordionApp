import { useState } from "react";
import "../App.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Accordian = ({ data }) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="accor-content" onClick={() => setShowData(!showData)}>
      <div className="content-details">
        <h2>{data.question}</h2>
        {showData && <p>{data.answer}</p>}
        <span>{showData ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </div>
    </div>
  );
};

export default Accordian;
