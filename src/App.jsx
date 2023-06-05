import Header from "./assets/components/Header";
import Course from "./assets/components/Course";

import "./assets/css/styles.css";
import Main from "./assets/components/Main";
function App() {
  const courseData = [
    {
      title: " معسكر جافاسكريبت",
      img: "../public/js.png",
      status: false,
    },
    {
      title: "معسكر جافا springboot",
      img: "../public/java.png",
      status: true,
    },
    {
      title: "معسكر بايثون",
      img: "../public/python.png",
      status: false,
    },
    {
      title: "node js",
      img: "../public/node-js.png",
      status: true,
    },
    {
      title: "alibaba cloud computing",
      img: "../public/alibaba.png",
      status: false,
    },
  ];

  return (
    <>
      <section className="section hero-section">
        <Header />
        <Main />
      </section>

      <section className="section courses-section">
        {courseData.map((course) => (
          <Course
            key={course.id}
            title={course.title}
            img={course.img}
            status={course.status === true ? "" : "غير متاح"}
          />
        ))}
      </section>
    </>
  );
}
export default App;
