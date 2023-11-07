import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=city%20club%20jankipuram%20lucknow%20+(city%20club%20)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//City+Club+%26+Hotels+(P)+Ltd.,+Kursi+Road,+Srishti+Apartment,+Bajrang+Vihar+Colony,+Gaurabagh,+Lucknow,+Uttar+Pradesh,+India/@26.9243828,80.92847,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x399957786de29425:0x73ae2ec765787710!2m2!1d80.9696698!2d26.9243888!3e0?hl=en&entry=ttu";
const MAP_TITLE = "City Club & Hotels (P) Ltd.";
const MAP_ADDRESS =
  "Kursi Rd, opposite Srishti Apartment, Bajrang Vihar Colony, Gaurabagh, Lucknow, Uttar Pradesh 226021";




const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>

        
        <div className="flex flex-col-reverse md:flex-row">
          {/* <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div> */}

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
               Venue
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
