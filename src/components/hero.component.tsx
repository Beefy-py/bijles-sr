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
        className={`${classes.hero} grid grid-cols-12 px-5 lg:px-10 xl:px-20 items-center gap-20`}
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fill-opacity="1"
          d="M0,192L21.8,197.3C43.6,203,87,213,131,208C174.5,203,218,181,262,181.3C305.5,181,349,203,393,186.7C436.4,171,480,117,524,96C567.3,75,611,85,655,80C698.2,75,742,53,785,53.3C829.1,53,873,75,916,112C960,149,1004,203,1047,197.3C1090.9,192,1135,128,1178,96C1221.8,64,1265,64,1309,53.3C1352.7,43,1396,21,1418,10.7L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroComponent;
