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

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link
          to="https://CIYCShop.etsy.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          Etsy
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link to="/burgees" className="flex items-center">
          Burgees
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link
          to="https://ciyc.bigcartel.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link to="/comingsoon" className="flex items-center">
          Photos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-2 rounded-md	text-[#000000] hover:bg-bbblue hover:text-white"
      >
        <Link
          to="https://ciyc.bigcartel.com/contact"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 drop-shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="cursor-pointer py-1.5 font-medium ml-4 text-[#000000]"
          >
            Clipperton Island Yacht Club
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
