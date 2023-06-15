import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navbarLinks = [
    { id: 1, name: "About", href: "/about" },
    { id: 2, name: "Etsy", href: "CIYCShop.etsy.com" },
    { id: 3, name: "Shop", href: "https://ciyc.bigcartel.com/" },
    { id: 4, name: "Photos", href: "/comingsoon" },
    { id: 5, name: "Contact", href: "https://ciyc.bigcartel.com/contact" },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navbarLinks.map((link) => (
        <Typography
          key={link.id}
          as="li"
          variant="small"
          color="black"
          className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
        >
          <Link
            to={link.href}
            target={link.id == 1 ? "" : link.id == 3 ? "" : "_blank"}
            className="flex items-center"
          >
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-4 px-8 lg:px-8 lg:py-4 bg-white drop-shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <Typography
              as="a"
              href="/"
              className="cursor-pointer py-1.5 font-medium ml-4 text-[#000000]"
            >
              Clipperton Island Yacht Club
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
