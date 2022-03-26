import "../../App.css";
import { FaInfoCircle } from "react-icons/fa";
import { homeInfo } from "../../data/data";

const HomeBody = () => {
  return (
    <main>
      {homeInfo.map((item, idx) => (
        <div
          className="bg-gray-darker  pt-5 md:pb-5 flex justify-center"
          id="body"
          key={idx}
        >
          <div className="bg-gray-lighter w-4/5  pt-5 md:pb-10 rounded z-10 border-4 border-gray-darkest">
            <h1 className="text-gray-darkest text-center text-7xl">
              {item.header}
            </h1>
            <div className="md:pl-16 pt-10 md:flex">
              <img
                src={item.img}
                alt="The Nelson"
                className="h-30 md:h-60 rounded-full"
              ></img>
              <p className="px-5 text-2xl leading-loose text-gray-darkest">
                {item.paragraph}
              </p>
            </div>
            <div className="lg:flex m-4 gap-4">
              <ul className="px-2 mb-4 lg:mb-0 whitespace-nowrap list-disc list-inside text-gray-darkest rounded-lg border-4 border-gray-darkest bg-gray-lightest shadow-xl">
                <div className="font-semibold text-2xl">{item.skillsTitle}</div>
                {item.skills.map(({ value }, idx) => (
                  <li className="text-lg" key={idx}>
                    {value}
                  </li>
                ))}
                <div className="py-2 italic flex items-center">
                  <FaInfoCircle className="h-6 w-6" />
                  <p className="px-2 text-lg">{item.preferredStack}</p>
                </div>
              </ul>
              <div className="px-2 text-gray-darkest border-4 border-gray-darkest rounded-lg bg-gray-lightest shadow-xl">
                <p className="text-2xl font-semibold">
                  {item.recommendationTitle}
                </p>
                <p className="text-lg leading-loose"> {item.recommendation}</p>
                <p className="pt-2 flex justify-end">{item.job}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default HomeBody;
