import React from "react";

const ContactFrom = () => {
  return (
    <div className=" w-full bg-stone-100">
      <div className="w-full mx-auto px-16 pt-24 py-12   shadow-md rounded-lg ">
        <h2 className="lg:text-4xl text-lg uppercase font-semibold text-stone-500 py-8 mb-6 text-center">
          Contact Us
        </h2>

        <form className="lg:px-48 px-2 flex flex-col gap-5">
          <div className=" w-full flex lg:flex-row lg:gap-12 gap-5 flex-col justify-between ">
            <div className="w-full flex flex-col gap-2">
              <label className=" text-gray-700 font-bold   " htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                className="w-full px-3 py-2  rounded-lg "
              />
            </div>

            <div className=" w-full flex flex-col gap-2">
              <label
                className=" w-full text-gray-700 font-bold "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2  rounded-lg "
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col lg:flex-row gap-10">
            <div className="w-full mr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="countryCode"
              >
                Country Code
              </label>
              <input
                type="text"
                id="countryCode"
                className="w-full px-3 py-2  rounded-lg "
              />
            </div>

            <div className="lg:w-2/3 w-full">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="w-full px-3 py-2  rounded-lg "
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="dateOfEvent"
            >
              Date of Event
            </label>
            <input
              type="date"
              id="dateOfEvent"
              className="w-full px-3 py-2 border rounded-lg "
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg "
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Services Interested In
            </label>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="weddingCoverage" className="mr-2" />
              <label htmlFor="weddingCoverage" className="text-gray-700">
                Wedding Coverage
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="prewedding" className="mr-2" />
              <label htmlFor="prewedding" className="text-gray-700">
                Pre-wedding
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="maternityPhotoshoot"
                className="mr-2"
              />
              <label htmlFor="maternityPhotoshoot" className="text-gray-700">
                Maternity Photoshoot
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="anniversary" className="mr-2" />
              <label htmlFor="anniversary" className="text-gray-700">
                Anniversary
              </label>
            </div>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="birthday" className="mr-2" />
              <label htmlFor="birthday" className="text-gray-700">
                Birthday
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="hearAboutUs"
            >
              How Did You Hear About Us?
            </label>
            <input
              type="text"
              id="hearAboutUs"
              className="w-full px-3 py-2 border rounded-lg "
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="askQuestion"
            >
              Ask a Question
            </label>
            <input
              type="text"
              id="askQuestion"
              className="w-full px-3 py-2 border rounded-lg "
            />
          </div>

          <div className=" flex items-center justify-center py-4">
            <button
              type="submit"
              className="px-8 py-2 w-64 lg:py-4 lg:px-10 bg-stone-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
