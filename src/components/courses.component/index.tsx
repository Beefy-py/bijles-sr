"use client";

import { coursesComponent } from "@/utils/content";
import CourseCardComponent from "./course-card.course";

const CoursesComponent = () => {
  return (
    <>
      <section id="courses" className="bg-white sm:py-16 lg:py-28">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesComponent.courses.map((course, index) => (
            <CourseCardComponent key={index + course.title} course={course} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesComponent;
