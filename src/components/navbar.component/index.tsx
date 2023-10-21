"use client";

import {
  Button,
  Collapse,
  Divider,
  Menu,
  SimpleGrid,
  Text,
} from "@mantine/core";
import {
  IconBooks,
  IconChevronCompactDown,
  IconChevronDown,
  IconExternalLink,
  IconLogin,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import {
  useDisclosure,
  useViewportSize,
  useWindowScroll,
} from "@mantine/hooks";
import { Burger } from "@mantine/core";
import ScrollProgressComponent from "./scrollprogress.navbar";
import { navbarComponent } from "@/utils/content";
import { theme } from "@tailwindConfig";
import Image from "next/image";
import { motion } from "framer-motion";

const NavbarComponent = () => {
  const [scroll] = useWindowScroll();
  const [opened, { toggle }] = useDisclosure();
  const [navSubmenuOpened, { toggle: toggleNavSubmenu }] = useDisclosure(false);
  const { width } = useViewportSize();
  const scrolled = scroll.y > 40;
  // const textInvert = (670 < scroll.y && scroll.y < 930) || scroll.y < 100;
  const { colors } = theme as any;
  const isSmallScreen = width < 700;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`z-20 fixed top-0`}
      style={{
        width: "inherit",
      }}
    >
      <motion.nav
        className={`py-2.5 ${
          scrolled ? "bg-secondary-700 py-1" : ""
        } transition duration-500 max-w-screen-2xl mx-auto px-5 lg:px-10 xl:px-20`}
      >
        <div className={`flex flex-wrap justify-between items-center mx-auto`}>
          <Link href="/" className="flex w-16 h-16 relative">
            <Image src={navbarComponent.logo} alt="Bijles SR Logo" fill />
          </Link>

          <div className="flex items-center lg:order-2 gap-2">
            <div className="buttons hidden sm:block">
              <Button
                component={Link}
                href="/hello"
                variant="outline"
                rightSection={<IconLogin size={16} />}
                color={colors.primary.DEFAULT}
                className={`!text-primary !bg-primary-50`}
              >
                {navbarComponent.ctaText1}
              </Button>

              <Menu
                width={isSmallScreen ? 300 : 700}
                shadow="md"
                position="bottom-end"
                withArrow
                arrowPosition="center"
              >
                <Menu.Target>
                  <Button
                    color={colors.tertiary["300"]}
                    variant="subtle"
                    className="!text-tertiary-900"
                    rightSection={<IconChevronDown size={16} />}
                  >
                    {navbarComponent.ctaText2}
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <SimpleGrid
                    cols={isSmallScreen ? 1 : 2}
                    spacing="xs"
                    verticalSpacing="xs"
                  >
                    {!isSmallScreen && (
                      <Menu.Item
                        className="relative h-auto z-10"
                        style={{
                          backgroundImage: "url(/images/gwap-app.jpg)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        styles={{
                          item: {
                            padding: "3rem",
                          },
                        }}
                      >
                        <div className="-z-10 bg-black/20 backdrop-blur-[2px] rounded absolute top-0 left-0 right-0 bottom-0"></div>
                        <div className="overlay-content z-10">
                          <p className="text-white font-semibold">
                            Download de GWAP-app uit de Play Store of App Store
                            en begin vandaag nog met betalen!
                          </p>
                          <Link
                            href={"/"}
                            className="cursor-pointer flex mt-3 py-2 bg-black text-white rounded items-center justify-center"
                          >
                            <div className="mr-3">
                              <Image
                                src={"/images/apple-store-logo.png"}
                                width={25}
                                height={25}
                                alt="apple app store logo"
                              />
                            </div>
                            <div>
                              <div className="text-xs">Download via de</div>
                              <div className="text-sm font-semibold -mt-1">
                                App Store
                              </div>
                            </div>
                          </Link>
                          <Divider
                            my="xs"
                            color="white"
                            label="Or"
                            labelPosition="center"
                          />
                          <Link
                            href={"/"}
                            className="flex mt-3 bg-black py-2 text-white rounded items-center justify-center"
                          >
                            <div className="mr-3">
                              <Image
                                src={"/images/google-play-logo.png"}
                                width={25}
                                height={25}
                                alt="google play store logo"
                              />
                            </div>
                            <div>
                              <div className="text-xs">Download via</div>
                              <div className="text-sm font-semibold font-sans -mt-1">
                                Google Play
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Menu.Item>
                    )}
                    <Menu.Item
                      component={Link}
                      href="/gwap-register"
                      // target="_blank"
                    >
                      <div className="flex flex-col items-center">
                        <h2 className="text-center text-tertiary-500 mb-3 text-2xl font-bold">
                          Registreer met
                        </h2>
                        <Image
                          src={"/images/gwap-logo-3.png"}
                          alt="gwap logo"
                          width={120}
                          height={90}
                        />
                      </div>
                    </Menu.Item>
                  </SimpleGrid>
                </Menu.Dropdown>
              </Menu>
            </div>

            <Menu
              width={200}
              shadow="md"
              position="bottom-end"
              withArrow
              arrowPosition="center"
              transitionProps={{ transition: "pop-top-right", duration: 150 }}
            >
              <Menu.Target>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  aria-label="Toggle navigation"
                  className={`lg:hidden`}
                  color={colors.tertiary.DEFAULT}
                />
              </Menu.Target>

              <Menu.Dropdown>
                {navbarComponent.links.map((link, index) => {
                  return (
                    <Menu.Item
                      component={Link}
                      href={`${link.path}`}
                      className="text-lg hover:bg-tertiary-100 transition"
                      key={index + link.name}
                    >
                      {link.name}
                    </Menu.Item>
                  );
                })}
                <div className="sm:hidden">
                  <Menu.Divider />
                  <Button
                    component={Link}
                    href="/hello"
                    variant="subtle"
                    rightSection={<IconLogin size={16} />}
                    color={colors.primary.DEFAULT}
                    className={`!text-primary !bg-primary-50 mb-1`}
                  >
                    {navbarComponent.ctaText1}
                  </Button>
                  <Button
                    onClick={toggleNavSubmenu}
                    color={colors.tertiary["300"]}
                    className="!text-tertiary-900"
                    variant="subtle"
                    rightSection={<IconChevronDown size={16} />}
                  >
                    {navbarComponent.ctaText2}
                  </Button>
                  <Collapse in={navSubmenuOpened}>
                    <Link
                      href={"/"}
                      className="flex flex-col items-start bg-tertiary-50 p-2 border-l-2 border-tertiary-500"
                    >
                      <h2 className="text-left text-tertiary-500 mb-3 text-base font-bold">
                        Registreer met
                      </h2>
                      <Image
                        src={"/images/gwap-logo-3.png"}
                        alt="gwap logo"
                        width={80}
                        height={50}
                      />
                    </Link>
                  </Collapse>
                </div>
              </Menu.Dropdown>
            </Menu>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbarComponent.links.map((link, index) => (
                <li key={index + link.name}>
                  <Link
                    href={"/" + link.path}
                    className={`block py-2 pr-4 pl-3"text-gray-800 hover:text-primary-600 lg:p-0 transition`}
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
      <ScrollProgressComponent scrolled={scrolled} />
    </motion.header>
  );
};

export default NavbarComponent;
