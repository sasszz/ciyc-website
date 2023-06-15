import { Typography } from "@material-tailwind/react";
import Flag from "../../assets/white-border-flag.png";
import Flag2 from "../../assets/white-border-flag-v2.png";

const Footer = () => {
  return (
    <footer className="w-full bg-bbblue p-8 bottom-0">
      <div className="flex flex-row flex-wrap items-left justify-left gap-y-6 gap-x-12 bg-bbblue text-center md:justify-between">
        <div className="flex flex-row">
          <img src={Flag} alt="logo-ct" className="w-32 ml-8" />
          <img src={Flag2} alt="logo-ct" className="w-32" />
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://ciyc.bigcartel.com/contact"
              target="_blank"
              className="font-normal text-white hover:text-bbblue hover:bg-white p-2 rounded-md mx-8"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
