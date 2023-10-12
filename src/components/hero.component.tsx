"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import React from "react";
import { IconArrowBigRightLine } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import { Image, Button, Text, Title } from "@mantine/core";
import { heroComponent } from "@/utils/content";
import classes from "@/styles/HeroComponent.module.css";
import { motion } from "framer-motion";

const HeroComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { colors } = theme as any;

  return (
    <section
      id="home"
      className="mb-8 sm:mb-16 lg:mb-28 -mx-5 lg:-mx-10 xl:-mx-20 relative bg-secondary"
    >
      <motion.div
        className="absolute -left-1/4 -top-1/4 z-2 bg-secondary-400 w-[50rem] h-[50rem] opacity-70"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 4,
          delay: 1.5,
        }}
        style={{
          borderRadius: "50%",
        }}
      />

      <div
        className={`${classes.hero} grid grid-cols-12 py-20 px-5 lg:px-10 xl:px-20 items-center gap-20`}
      >
        <div className="left col-span-6">
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
            </Button>{" "}
          </div>
        </div>
        <div className="right h-full p-6 col-span-6 flex items-center justify-center">
          <Carousel
            loop
            plugins={[autoplay.current]}
            className="hero-slider"
            styles={{
              viewport: {
                borderRadius: "50%",
                // width: "40vw",
                // height: "40vh",
              },
            }}
            withControls={false}
          >
            {heroComponent.imageSlider.map((img, index) => (
              <Carousel.Slide key={index + img.title}>
                <Image
                  radius="lg"
                  w="auto"
                  fit="contain"
                  src={img.src}
                  alt={img.title}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>

      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#bbeeee"
          fill-opacity="1"
          d="M0,256L34.3,261.3C68.6,267,137,277,206,261.3C274.3,245,343,203,411,160C480,117,549,75,617,90.7C685.7,107,754,181,823,176C891.4,171,960,85,1029,58.7C1097.1,32,1166,64,1234,74.7C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroComponent;
