import jobPortal from "../assets/jobPortal.svg";
import internship from "../assets/Internship.svg";
import affilitate from "../assets/affilitatePortal.svg";
import blog from "../assets/blog.svg";
import hallOfFame from "../assets/hallOfFame.svg";
import lco from "../assets/lco.png";
import "../css/neumorphicCard.css";

const Products = () => {
  return (
    <div className="mb-20 ">
      <h1 className="text-5xl text-[#343434] mx-auto text-center group font-semibold ">
        "Our Products"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex flex-wrap items-center mx-40 mt-48 justify-evenly ">
        <a href="https://jobs.ineuron.ai/">
          <div className="relative p-8 space-y-4 duration-300 rounded-md card group w-80">
            <div className="absolute w-full h-24 duration-300 translate-x-4 -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass -left-44 -top-20">
              <div className="flex items-center justify-center h-full text-lg text-ineuron">
                Let's find your dream job with iNeuron
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -right-4"></div>
            </div>
            <div className="w-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={jobPortal}
                className="w-32 h-32 group-hover:scale-[230%] duration-300 scale-[200%]"
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              Job Portal
            </p>
            <p className="text-center text-md">
              Use exceptional templates for a stand-out resume minus the sign up
              process with iNeuron.
            </p>
          </div>
        </a>

        <a href="https://internship.ineuron.ai/">
          <div className="relative p-8 space-y-4 duration-300 rounded-md card group -mt-52 w-80 ">
            <div className="absolute w-full h-24 duration-300 -translate-x-4 translate-y-5 opacity-0 -right-80 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass -top-10">
              <div className="flex items-center justify-center h-full text-lg text-center text-ineuron">
                Want to hone your skills and gain experience?
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -left-4"></div>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={internship}
                className="w-32 h-32 group-hover:scale-[230%] duration-300 scale-[200%]"
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              Internship Portal
            </p>
            <p className="text-center text-md">
              iNeuron's self-paced intership portal prioritises hands-on
              training with 570+ internship projects.
            </p>
          </div>
        </a>

        <a href="https://affiliate.ineuron.ai/">
          <div className="relative p-8 space-y-4 duration-300 rounded-md card group w-80 ">
            <div className="absolute w-full h-24 duration-300 translate-x-4 translate-y-5 opacity-0 -right-40 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass -top-16">
              <div className="flex items-center justify-center h-full text-lg text-center text-ineuron">
                Attain financial freedom by joining our affiliate program
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -left-4"></div>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={affilitate}
                className="w-32 h-32 group-hover:scale-[230%] duration-300 scale-[200%]"
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              Become an affiliate
            </p>
            <p className="text-center text-md">
              Explore affiliate marketing opportunities with iNeuron and attain
              financial freedom.
            </p>
          </div>
        </a>

        <a href="https://halloffame.ineuron.ai/">
          <div className="relative p-8 mt-16 space-y-4 duration-300 rounded-md card group w-80 ">
            <div className="absolute w-full h-24 duration-300 -translate-x-1 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass -left-48 -top-16">
              <div className="flex items-center justify-center h-full text-base text-center text-ineuron">
                Proud of our achievers to have proved their success through
                hard-work
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -right-4"></div>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={hallOfFame}
                className="w-32 h-32 group-hover:scale-[120%] duration-300"
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              Hall of fame
            </p>
            <p className="text-center text-md">
              Our student placements and 10+ career transitions speak volumes
              about our courses.
            </p>
          </div>
        </a>

        <a href="https://web.learncodeonline.in/">
          <div className="relative p-8 space-y-4 duration-300 rounded-md group -mt-36 w-80 card ">
            <div className="absolute w-full h-24 duration-300 translate-x-2 -translate-y-5 opacity-0 -right-80 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass top-6">
              <div className="flex items-center justify-center h-full mx-3 text-lg text-center text-ineuron">
                LearnCodeOnline is known for producing courses on latest tech.
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -left-4"></div>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={lco}
                className="scale-[0.8] group-hover:scale-[90%] duration-300 "
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              Learn Code Online
            </p>
            <p className="text-center text-md">
              High Quality Course at Affordable prices. We are latest in tech
              and highest in quality.
            </p>
          </div>
        </a>

        <a href="https://blog.ineuron.ai/">
          <div className="relative p-8 mt-16 space-y-4 duration-300 rounded-md card group w-80 ">
            <div className="absolute w-full h-24 duration-300 translate-x-10 -translate-y-5 opacity-0 -right-32 group-hover:translate-y-0 group-hover:translate-x-0 rounded-3xl group-hover:opacity-95 glass -top-14">
              <div className="flex items-center justify-center h-full mx-3 text-lg text-center text-ineuron">
                InBlog, quench your knowledge thirst here.
              </div>
              <div className="absolute w-6 h-6 rotate-45 bg-[#6c87ff38] rounded-full -bottom-4 -left-4"></div>
            </div>
            <div className="w-32 h-32 mx-auto rounded-full product-circle img-conatiner">
              <img
                src={blog}
                className="w-32 h-32 group-hover:scale-[120%] duration-300"
                alt=""
              />
            </div>
            <p className="text-xl font-semibold text-center duration-300 ">
              InBlog
            </p>
            <p className="text-center text-md">
              Explore all you want to know about your favorite courses with
              LearnCodeOnline and iNeuron.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;