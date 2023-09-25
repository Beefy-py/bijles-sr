"use client";

import { Button, Text } from "@mantine/core";
import { IconBooks, IconLogin } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import ScrollProgressComponent from "./scrollprogress.navbar";
import { navbarComponent } from "@/utils/content";
import { theme } from "@tailwindConfig";
import Image from "next/image";

const NavbarComponent = () => {
  const [scroll] = useWindowScroll();
  const [opened, { toggle }] = useDisclosure();
  const scrolled = scroll.y > 40;
  const { colors } = theme as any;

  return (
    <header
      className={`w-full z-20 ${
        scrolled ? "sticky top-0 backdrop-blur-xl" : ""
      }`}
    >
      <nav className={`py-2.5 max-w-screen-2xl mx-auto px-5 lg:px-10 xl:px-20`}>
        <div className={`flex flex-wrap justify-between items-center mx-auto`}>
          <Link href="/" className="flex w-12 h-12 relative">
            <Image src={navbarComponent.logo} alt="Bijles SR Logo" fill />
          </Link>
          <div className="flex items-center lg:order-2 gap-2">
            <Button
              component={Link}
              href="/hello"
              variant="light"
              rightSection={<IconLogin size={16} />}
              color={colors.primary.DEFAULT}
              className="!text-primary-900"
            >
              {navbarComponent.ctaText1}
            </Button>
            <Button
              component={Link}
              href="/hello"
              color={colors.tertiary["300"]}
              className="!text-tertiary-900"
            >
              {navbarComponent.ctaText2}
            </Button>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
              className={`lg:hidden`}
            />
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbarComponent.links.map((link, index) => (
                <li key={index + link.name}>
                  <Link
                    href={"/" + link.path}
                    className="block py-2 pr-4 pl-3 text-gray-800 hover:text-primary-600 lg:p-0 transition"
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <ScrollProgressComponent scrolled={scrolled} />
    </header>
  );
};

export default NavbarComponent;
