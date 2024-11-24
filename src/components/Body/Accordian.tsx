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
    <div className="container p-2 mx-auto mb-5 max-w-[600px]">
      <Accordion className="w-full" allowMultiple>
        {data.map((item) => (
          <AccordionItem key={item.id}>
            <h2>
              <AccordionButton className="flex justify-between bg-bbblue hover:bg-bbblue hover:text-white mt-2 rounded-md p-4">
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
                  <Link
                    to="https://form.jotform.com/231654729375061"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                      Jot Form
                    </button>
                  </Link>
                </div>
              ) : item.id == 7 ? (
                <div>
                  <ol className="flex flex-col gap-4 pt-4">
                    <li>
                      <Link
                        to="https://www.amazon.com/Clipperton-Island-Ile-Passion-cartographic/dp/1983241687/ref=sr_1_1?dib=eyJ2IjoiMSJ9.oX2T-q1tg8EE9VHydNF6Hr4yJJnbLbbDXG5PK1qUiLY.ao5tpvle9xU-bud5FVHATG7dbvdypi7YQpzvb805Bas&dib_tag=se&keywords=eric+chevreuil&qid=1730226882&sr=8-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                          Clipperton Island, Ile de la Passion: A cartographic
                          history
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/watch?v=p3wNu_Vvxww&t=20s"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                          Clipperton Island from above - Aerial Video of Ile de la
                          Passion
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/watch?v=HrPizVV1KJI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                          Jacques Cousteau Odyssey Clipperton: The Island Time
                          Forgot
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/watch?v=7Zok4Q0nj90&t=460s"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className="btn bg-bbblue text-white p-2 rounded-md hover:text-[#000000] mt-5">
                          Explore Clipperton's waters with Pristine Seas
                        </a>
                      </Link>
                    </li>
                  </ol>
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
