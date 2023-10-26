"use client";

import React from "react";
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
import { theme } from "@tailwindConfig";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

type Props = {
  tutorial: any;
  tutorialIndex: number;
};

const TutorialCardComponent = ({ tutorial, tutorialIndex }: Props) => {
  const { colors } = theme as any;
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        withBorder
        data-aos="fade-up"
        data-aos-delay={tutorialIndex * 200}
        radius="md"
        className="w-full cursor-pointer hover:!border-secondary-800 !border transition group"
      >
        {/* <TutorialCardImageTutorialComponent /> */}
        <Title className="group-hover:!text-secondary-800 transition !font-cabin">
          {tutorial.title}
        </Title>

        <Group justify="space-between" mt="md" mb="xs">
          <Group>
            <div>Beoordeling:</div>
            <Rating fractions={4} value={tutorial.rating} readOnly />
          </Group>
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
            <IconSchool className="w-4 h-4 mr-1" />
            {tutorial.durationInHours} uren
          </span>
        </Group>

        <Text size="sm" c="dimmed">
          {tutorial.summary}
        </Text>

        <Group mt="md" gap="sm" grow>
          <Button
            // component={Link}
            // href={`intro/tutorials/${tutorial.title.toLowerCase()}`}
            onClick={open}
            variant="default"
            color={colors.tertiary.DEFAULT}
          >
            Bekijk Intro
          </Button>
          <Button
            component={Link}
            href={`/tutorials/${tutorial.title.toLowerCase()}`}
            variant="light"
            color={colors.tertiary.DEFAULT}
          >
            Meer Info
          </Button>
        </Group>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title="Tutorial Intro Video"
        centered
        size="xl"
      >
        <video
          className="w-full h-auto max-w-full border border-gray-200 rounded-lg"
          controls
        >
          <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </>
  );
};

export default TutorialCardComponent;
