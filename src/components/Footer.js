import logo from "../assets/footer/Happyholi.png";
import twitter from "../assets/footer/twitter.png";
import facebook from "../assets/footer/facebook.png";

const Footer = () => {
  return (
    <div className="box-border flex justify-around w-full gap-20 px-32 py-8 text-black bg-white sm:px-5 sm:flex-col footer h-64 sm:h-auto">
      <div className="space-y-10 sm:w-auto w-[26rem]">
        <div className="flex items-center justify-between">
          <img src={logo} className="h-24 w-auto" alt="" />
        </div>
       
        <div className="flex items-end justify-end">
          <img src={facebook} className="w-10 p-2" alt="" />
          <img src={twitter} className="w-10 p-2" alt="" />
        </div>
      </div>

      <div className="order-1 ">
        <div className="flex gap-6">
          <ul className="flex gap-6 text-left">
            <li>About Us</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
