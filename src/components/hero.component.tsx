"use client";

import { Button, Group } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import React from "react";
import {
  IconArrowBigLeftFilled,
  IconArrowBigRightFilled,
  IconArrowBigRightLine,
} from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import { Image } from "@mantine/core";
import { heroComponent } from "@/utils/content";

const HeroComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { colors } = theme as any;

  return (
    <section id="home" className="sm:my-16 lg:my-28">
      <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
       <div className="">
          <Carousel
            loop
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            className="hero-slider w-full h-full"
            styles={{
              indicator: {
                background: colors.secondary.DEFAULT,
              },
            }}
            height={"100%"}
            nextControlIcon={
              <IconArrowBigRightFilled className="text-secondary" />
            }
            previousControlIcon={
              <IconArrowBigLeftFilled className="text-secondary" />
            }
          >
            {heroComponent.imageSlider.map((img, index) => (
              <Carousel.Slide key={index + img.title}>
                <Image src={img.src} alt={img.title} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>  <div className="place-self-center">
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
              className="group !bg-primary z-0 transition"
            >
              {heroComponent.ctaText}
            </Button>
          </Group>
        </div>
       
      </div>
    </section>
  );
};

export default HeroComponent;
