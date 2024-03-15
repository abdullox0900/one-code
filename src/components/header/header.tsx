"use client";

import { useState } from "react";

import { AcmeLogo } from "@/assets/svg/acme";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Container from "../container/container";
import UserAuthButton from "../user_button/user_button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "Edu",
      path: "/edu",
    },
  ];

  return (
    <Container style={{ padding: 0 }}>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className="hed"
        style={{ borderBottom: "none", paddingLeft: "0px" }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="center">
          <NavbarBrand>
            <Link color="foreground" href="/">
              <AcmeLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="end">
          <NavbarBrand>
            <Link color="foreground" href="/">
              <AcmeLogo />
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/portfolio">
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/edu">
              Edu
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent justify="end">
                    <UserAuthButton />
                </NavbarContent> */}

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </Container>
  );
}

export default Header;
