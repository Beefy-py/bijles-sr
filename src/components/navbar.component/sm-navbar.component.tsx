import { navbarComponent } from "@/utils/content";
import { Burger, Button, Collapse, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconLogin } from "@tabler/icons-react";
import { theme } from "@tailwindConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmNavbarComponent = () => {
  const [opened, { toggle }] = useDisclosure();
  const [navSubmenuOpened, { toggle: toggleNavSubmenu }] = useDisclosure(false);
  const { colors } = theme as any;

  return (
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
  );
};

export default SmNavbarComponent;
