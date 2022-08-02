import vit from "../assets/partnerImage/vit.svg";
import gim from "../assets/partnerImage/gim.svg";
import keit from "../assets/partnerImage/keit.svg";
import malnad from "../assets/partnerImage/malnad.svg";
import taxila from "../assets/partnerImage/taxila.svg";
import bank from "../assets/partnerImage/bank.png";
const Patner = () => {
  return (
    <div className="flex items-center justify-between h-64 p-12 px-20 mx-auto my-10 shadow-lg sm:w-screen mt-52 shadow-blue-200 rounded-3xl partner-background max-w-7xl sm:hidden">
      <div>
        <p className="text-5xl font-bold text-white w-68">
          Our Partnered <br /> Institutions
          <img src={bank} className="inline-block w-10 ml-3" alt="" />
        </p>
      </div>
      <div className="flex gap-5 h-36">
        <img src={taxila} alt="" />
        <img src={keit} alt="" />
        <img src={vit} alt="" />
        <img src={gim} alt="" />
        <img src={malnad} alt="" />
      </div>
    </div>
  );
};

export default Patner;
