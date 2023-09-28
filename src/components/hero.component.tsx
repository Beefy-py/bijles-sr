"use client";

import { Button, Container, Group, Overlay, Text, Title } from "@mantine/core";
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
import classes from "@/styles/HeroComponent.module.css";

const HeroComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { colors } = theme as any;

  return (
    <section
      id="home"
      className="mb-8 sm:mb-16 lg:mb-28  -mx-5 lg:-mx-10 xl:-mx-20 relative"
    >
      <div className={`${classes.hero}`}>
        <Carousel
          loop
          plugins={[autoplay.current]}
          className="hero-slider w-full h-full !absolute"
          styles={{
            indicator: {
              background: colors.secondary.DEFAULT,
            },
          }}
          height={"100%"}
          withControls={false}
        >
          {heroComponent.imageSlider.map((img, index) => (
            <Carousel.Slide key={index + img.title}>
              <Image src={img.src} alt={img.title} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={`${classes.container} md:w-1/2`} size="md">
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
            variant="outline"
            color={colors.primary.DEFAULT}
          >
            {heroComponent.ctaText}
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default HeroComponent;
