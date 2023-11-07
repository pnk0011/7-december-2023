const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Wedding+Pankaj+%26+Shivy+%F0%9F%92%8C&dates=20231206T143000Z%20231206T143000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Our wedding will be held on:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        Thursday, 7th December 2023
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Save the Date
        </a>
      </div>

      {/* <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          AKAD NIKAH
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          08.00 WIB
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl  font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          RESEPSI
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          11.00 WIB
        </div>
      </div> */}
    </div>
  );
};

export default Agendas;
