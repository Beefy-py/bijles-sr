import { Button, Flex, Group, Title } from "@mantine/core";
import "./globals.css";
import React from "react";
import Link from "next/link";

const Error404Page = () => {
  return (
    <section className="bg-white">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-28 lg:px-8">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>
          <Title
            order={2}
            className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
          >
            Oops! Bent u verdwaald?
          </Title>
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Title
              order={3}
              size={"h4"}
              className="mb-4 text-lg !font-light text-gray-500"
            >
              Hier vindt u enkele nuttige links om uw weg te vinden:
            </Title>
            <Group className="w-full" justify="center" gap="sm">
              <Button component={Link} href="/" variant="subtle">
                Home
              </Button>
              <Button component={Link} href="/" variant="subtle">
                About
              </Button>
              <Button component={Link} href="/" variant="subtle">
                Reviews
              </Button>
            </Group>
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Error404Page;
