"use client";

import { coursesComponent } from "@/utils/content";
import CourseCardComponent from "./course-card.course";

const CoursesComponent = () => {
  return (
    <>
      <section
        id="courses"
        className="bg-transparent sm:py-16 lg:py-40 relative"
      >
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesComponent.courses.map((course, index) => (
            <CourseCardComponent
              key={index + course.title}
              course={course}
              courseIndex={index}
            />
          ))}
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="6000"
          className="absolute -z-10 h-[60rem] w-[60rem] rotate-45 -left-72 -top-20"
          style={{
            backgroundImage: `url('/assets/images/blob2.png')`,
            backgroundSize: "cover", // You can adjust this to 'contain' or other values
            backgroundPosition: "center", // You can adjust this if needed
          }}
        ></div>
      </section>
    </>
  );
};

export default CoursesComponent;
