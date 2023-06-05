import Header from "./assets/components/Header";
import Course from "./assets/components/Course";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

import "./assets/css/styles.css";
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
            status={course.status === true ? "متاح" : "مغلق "}
          />
        ))}
      </section>
      <section className="footer section">
        <Footer />
      </section>
    </>
  );
}
export default App;
