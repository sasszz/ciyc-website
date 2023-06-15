import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import data from "../../assets/info.json";
import Flag from "../../assets/white-border-flag-v2.png";
import Flag2 from "../../assets/white-border-flag.png";
import { Link } from "react-router-dom";

const Accordian = () => {
  const triangleFlagDescription =
    "The burgee representing Clipperton Island Yacht Club is a condensed version of the rectangular flag above to fit the traditional triangular shape of a burgee. It features the stripes of the French flag, as well as a prominent Booby bird, and the yacht club initials.";
  return (
    <div className="container p-2 mx-auto mb-5">
      <Accordion className="w-full" allowMultiple>
        {data.map((item) => (
          <AccordionItem key={item.id}>
            <h2>
              <AccordionButton className="flex justify-between hover:bg-bbblue hover:text-white hover:rounded-md p-4">
                <span className="text-left font-bold">{item.header}</span>
                <AccordionIcon className="text-left !text-navy-900 dark:!text-black" />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium !text-navy-900 dark:!text-black m-4 ">
              {item.description}
              {item.id == 4 ? (
                <div>
                  <div className="my-8 mx-auto object-scale-down">
                    <img
                      src={Flag}
                      alt="Flag"
                      className="mx-auto drop-shadow-lg"
                    />
                  </div>
                  <div className="my-8 mx-auto object-scale-down">
                    <p className="my-8"> {triangleFlagDescription}</p>
                    <img
                      src={Flag2}
                      alt="Flag"
                      className="mx-auto drop-shadow-lg"
                    />
                  </div>
                </div>
              ) : item.id == 6 ? (
                <div>
                  <Link to="https://form.jotform.com/231654729375061" target="_blank" rel="noreferrer">
                    <button className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                      Jot Form
                    </button>
                  </Link>
                </div>
              ) : (
                <p></p>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
