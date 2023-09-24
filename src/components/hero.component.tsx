import { Button, Group } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconArrowBigRightLine } from "@tabler/icons-react";

const HeroComponent = () => {
  return (
    <section id="home" className="sm:my-16 lg:my-28">
      <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl">
            {heroComponent.title}
          </h1>
          <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            {heroComponent.subTitle}
          </p>
          <Group className="w-full" justify="start" gap="sm">
            <Button
              rightSection={
                <IconArrowBigRightLine className="group-hover:translate-x-1 transition" />
              }
              component={Link}
              href="/hello"
              className="group !bg-primary z-0 hover:bg-orange-700 transition"
            >
              {heroComponent.ctaText}
            </Button>
          </Group>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 md:flex">
          <Image
            src="/assets/images/educator.png"
            alt="mockup"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
