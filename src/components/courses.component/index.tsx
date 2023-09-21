import { coursesComponent } from "@/utils/content";
import { Group, Modal, Rating } from "@mantine/core";
import { IconAlarm, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursesComponent = () => {
  return (
    <>
      <section id="courses" className="bg-white sm:py-16 lg:py-28">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
          {coursesComponent.courses.map((course, index) => (
            <Link
              href="/pricing"
              key={index + course.title}
              className="flex flex-row justify-between p-6 bg-white rounded-lg border border-gray-200 cursor-pointer"
            >
              <div className="left">
                <div className="flex justify-between items-center mb-2 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    <IconAlarm className="w-4 h-4 mr-1" />
                    {course.durationInHours} uren
                  </span>
                </div>
                <Group>
                  <div>Beoordeling:</div>
                  <Rating fractions={4} value={course.rating} readOnly />
                </Group>
                <h2 className="mb-2 text-5xl font-bold tracking-tight text-gray-500">
                  <Link href="#">{course.title}</Link>
                </h2>
              </div>
              <div className="right w-32 relative">
                <Image fill src={course.image} alt={course.title} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesComponent;
