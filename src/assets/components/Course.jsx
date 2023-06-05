import { FaCalendar, FaMap } from "react-icons/fa";

function Course(props) {
  return (
    <div className="course-card">
      <div className="status">
        <span>{props.status}</span>
        <div className="title-logo">
          <h3>{props.title}</h3>
          <img src={props.img} alt="img" className="course-img" />
        </div>
      </div>
      <h3 className="desc">
        <div className="date">
          <p>4 weeks</p>
          <FaCalendar />
          <p>الرياض</p>
          <FaMap />
        </div>
        <div className="starts-at">
          <p>20-02-2023 يبدأ في </p>
          <FaCalendar />
        </div>
      </h3>
      <div className="btns">
        <button>التفاصيل</button>
        <button>تسجيل</button>
      </div>
    </div>
  );
  //   });
}

export default Course;
