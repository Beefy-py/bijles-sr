"use client";

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
import { Image, Button, Text, Title } from "@mantine/core";
import { heroComponent } from "@/utils/content";
import classes from "@/styles/HeroComponent.module.css";

const HeroComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { colors } = theme as any;

  return (
    <section
      id="home"
      className="mb-8 sm:mb-16 lg:mb-28 -mx-5 lg:-mx-10 xl:-mx-20 relative bg-secondary"
    >
      <div
        className={`${classes.hero} grid grid-cols-12 px-5 lg:px-10 xl:px-20 items-center gap-20`}
      >
        <div className="left col-span-6">
          {" "}
          <div className={`${classes.container}`}>
            <Title className={classes.title}>{heroComponent.title}</Title>
            <Text className={classes.description} size="xl" mt="xl">
              {heroComponent.subTitle}
            </Text>
            <Button
              rightSection={
                <IconArrowBigRightLine className="group-hover:translate-x-1 transition" />
              }
              component={Link}
              href="/hello"
              className="mt-2 group z-0 transition"
              variant="filled"
              color={colors.primary.DEFAULT}
            >
              {heroComponent.ctaText}
            </Button>
          </div>
        </div>
        <div className="right h-full p-6 col-span-6 flex items-center justify-center">
          <Carousel
            loop
            plugins={[autoplay.current]}
            className="hero-slider"
            styles={{
              // slide: {
              //   borderRadius: "20%",
              //   // width: "40vw",
              //   // height: "40vh",
              // },
              // container: {
              //   borderRadius: "50%",
              // },
              viewport: {
                borderRadius: "50%",
                width: "40vw",
                height: "40vh",
              },
            }}
            withControls={false}
          >
            {heroComponent.imageSlider.map((img, index) => (
              <Carousel.Slide key={index + img.title}>
                <Image src={img.src} alt={img.title} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
