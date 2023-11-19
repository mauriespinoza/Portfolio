
'use client'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,NavbarMenuToggle,NavbarMenu,NavbarMenuItem} from "@nextui-org/react";

const NavbarResp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
      <Link className="text-black text-lg my-2" href="/">
      Home
    </Link>,
      <Link className="text-black text-lg my-2" href="/about">
      Acerca de MI
    </Link>,
    <Link className="text-black text-lg my-2" href="/experience">
      Experiencia
    </Link>,
    <Link className="text-black text-lg my-2" href="/projects">
      Proyectos
    </Link>,
    <Link className="text-black text-lg my-2" href="/contact">
      Contacto
    </Link>
      ];
  return (
    <Navbar className="bg-indigo-300" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         
          <p className="font-bold text-lg text-inherit ">MAURICIO ESPINOZA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link className="font-bold" color="foreground" href="/" >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/about" >
            Acerca de Mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/experience" aria-current="page">
          Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarResp;
