"use client";

import React from "react";
import { IconArrowBigUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";
import { theme } from "@tailwindConfig";

const ScrollComponent = ({ children }: { children: React.ReactNode }) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { colors } = theme as any;

  return (
    <>
      {children}
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              className="group transition !bg-tertiary-500"
              leftSection={
                <IconArrowBigUp
                  className="group-hover:animate-bounce"
                  style={{ width: rem(16), height: rem(16) }}
                />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color={colors.tertiary.DEFAULT}
            >
              Naar Boven
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default ScrollComponent;
