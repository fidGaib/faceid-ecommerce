import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useSeeMode } from "../../../see-mode/module";

const FAQ = ({
  day,
  title,
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  recommendations,
  result,
}) => {
  const [isLessonsShowing, setIsLessonsShowing] = useState(false);

  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <article
      className="faq"
      onClick={() => setIsLessonsShowing((prev) => !prev)}
    >
      <div className="plus">
        <div>
          <h4>{day}</h4>
          <h5 style={turn ? styles : {}}>{title}</h5>
        </div>
        <button className="faq__icon">
          {isLessonsShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {isLessonsShowing && (
        <div className="minus">
          <ul>
            <li style={turn ? styles : {}}>{lesson1}</li>
            <li style={turn ? styles : {}}>{lesson2}</li>
            <li style={turn ? styles : {}}>{lesson3}</li>
            <li style={turn ? styles : {}}>{lesson4}</li>
            <li style={turn ? styles : {}}>{lesson5}</li>
            <li style={turn ? styles : {}}>{lesson6}</li>
            <li style={turn ? styles : {}}>{lesson7}</li>
            <li style={turn ? styles : {}}>{lesson8}</li>
            <li style={turn ? styles : {}}>{lesson9}</li>
            <li style={turn ? styles : {}}>{lesson10}</li>
          </ul>
          <h4 style={turn ? styles : {}}>{recommendations}</h4>
          <h4 style={turn ? styles : {}}>{result}</h4>
        </div>
      )}
    </article>
  );
};

export default FAQ;
