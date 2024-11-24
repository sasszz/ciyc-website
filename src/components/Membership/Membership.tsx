import Flag from "../../assets/burgeeSize.png";
import Flag2 from "../../assets/fabricBurgee.jpg";

const Membership = () => {
  return (
    <div className="container p-5 max-w-2xl flex gap-8 flex-col items-center justify-center mx-auto text-center my-20">
      <h2>CIYC Membership</h2>
      <div>
        <h3>
          <strong>How to become a Member:</strong>
        </h3>
        <p className="pt-4">
          Order a{" "}
          <a
            className="p-2 rounded-md	text-[#000000] bg-bbblue hover:text-white"
            href="/burgees"
          >
            burgee
          </a>{" "}
          and contact Eric Chevreuil at{" "}
          <a
            className="p-2 rounded-md	text-[#000000] bg-bbblue hover:text-white"
            href="mailto:echevreuil@sbcglobal.net"
          >
            echevreuil@sbcglobal.net
          </a>
        </p>
      </div>
      <div>
        <h3>
          <strong>Current Members:</strong>
          <ol>
            <li>Eric Chevreuil (Folsom, CA)</li>
            <li>John Leet (EDH, CA)</li>
          </ol>
        </h3>
      </div>
      <div>
        <h3>
          <strong>Honorary Members:</strong>
          <ol>
            <li>Christian Jost (Fr) Scientist http://clipperton.cpom.fr/</li>
            <li>Clayton Conn journalist, Mexico</li>
            <li>
              Michael Deany Commodore of the Ross Island Yacht Club Antarctica
            </li>
          </ol>
        </h3>
      </div>
    </div>
  );
};

export default Membership;
