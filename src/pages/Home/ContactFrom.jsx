import React from "react";

const ContactFrom = () => {
  return (
    <div className="py-10 lg:px-40">
      <div className="w-full mx-auto p-8  shadow-md rounded-lg bg-stone-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <form>
          <div className=" w-full flex lg:flex-row lg:gap-10 gap-4 flex-col justify-between  mb-4">
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

          <div className="mb-4 flex gap-10">
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

            <div className="w-2/3">
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

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 lg:py-5 lg:px-10 bg-stone-600 text-white rounded-lg"
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
