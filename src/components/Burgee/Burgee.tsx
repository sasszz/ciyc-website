import Flag from "../../assets/burgeeSize.png";
import Flag2 from "../../assets/fabricBurgee.jpg";

const Burgee = () => {
  return (
    <div className="container p-5 max-w-2xl flex gap-8 flex-col items-center justify-center mx-auto text-center my-20">
      <img src={Flag} alt="logo-ct" className="w-[500px]" />
      <h2>Purchase a CIYC Burgee</h2>
      <div>
        <p>
          <strong>Dimensions:</strong> 13"x7.5"
        </p>
        <p>
          <strong>Price:</strong> 55 Euro
        </p>
        <p>
          <strong>Shipping:</strong> Free
        </p>
      </div>
      <div>
        <p>Embroidered both sides and made with heavy weight material</p>
        <p className="pt-4">
          Email Jürgen Arnke at{" "}
          <a
            className="p-2 rounded-md	text-[#000000] bg-bbblue hover:text-white"
            href="mailto:siamlog@googlemail.com"
          >
            siamlog@googlemail.com
          </a>
        </p>
      </div>
      <img src={Flag2} alt="logo-ct" className="w-[500px]" />
    </div>
  );
};

export default Burgee;
