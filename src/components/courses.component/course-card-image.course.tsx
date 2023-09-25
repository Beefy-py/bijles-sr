"use client";

import { Card, Image } from "@mantine/core";
import React from "react";

const CourseCardImageCourseComponent = () => {
  return (
    <Card.Section className="w-full !mx-auto">
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        w="auto"
        h="auto"
        alt="Norway"
        className="rounded-lg"
        radius="lg"
      />
    </Card.Section>
  );
};

export default CourseCardImageCourseComponent;
