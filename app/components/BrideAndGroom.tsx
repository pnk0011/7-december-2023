import TextWithLine from "./Utils/TextWithLine";
import bride from "~/images/pnk.jpeg";
import groom from "~/images/shivy.jpeg";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
      We are the Blessed
       </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={bride}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Pankaj Singh
            </h3>
            <div className="mb-4">
              <TextWithLine>Bridegroom</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
            Born on 11th March 1994 in Lucknow. The youngest son of{" "}
              <strong>Mr. Shambhu Singh</strong> and{" "}
              <strong>Mrs. Sachi Singh</strong>.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={groom}
                alt="pengantin laki-laki"
                className="w-48 h-48 rounded-full mb-8"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Shiwanjalee Suman
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>Bride</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
              Born on 6th July 1996 in Bokaro. The eldest daughter of <strong>Mr. S.P Singh</strong> and{" "}
                <strong>Mrs. Beena Singh</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
