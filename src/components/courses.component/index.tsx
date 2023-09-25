import { coursesComponent } from "@/utils/content";
import {
  Group,
  Modal,
  Rating,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Title,
} from "@mantine/core";
import { IconAlarm, IconSchool, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import CourseCardImageCourseComponent from "./course-card-image.course";
import { theme } from "@tailwindConfig";

const CoursesComponent = () => {
  const { colors } = theme as any;
  return (
    <>
      <section id="courses" className="bg-white sm:py-16 lg:py-28">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesComponent.courses.map((course, index) => (
            <Link
              href="#"
              key={index + course.title}
              className="flex flex-col lg:flex-row justify-between cursor-pointer"
            >
              <Card radius="md" className="w-full">
                {/* <CourseCardImageCourseComponent /> */}
                <Title>{course.title}</Title>

                <Group justify="space-between" mt="md" mb="xs">
                  <Group>
                    <div>Beoordeling:</div>
                    <Rating fractions={4} value={course.rating} readOnly />
                  </Group>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    <IconSchool className="w-4 h-4 mr-1" />
                    {course.durationInHours} uren
                  </span>
                </Group>

                <Text size="sm" c="dimmed">
                  {course.summary}
                </Text>

                <Group mt="md" gap="sm" grow>
                  <Button variant="default" color={colors.tertiary.DEFAULT}>
                    Bekijk Intro
                  </Button>
                  <Button variant="light" color={colors.tertiary.DEFAULT}>
                    Meer Info
                  </Button>
                </Group>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesComponent;
