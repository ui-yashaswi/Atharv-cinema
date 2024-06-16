import React, { useEffect, useState } from "react";
import axios from "axios";
const ContactFrom = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
    email: "",
    phoneNumber: "",
    reachedThrough: "",
    dateOfEvent: "",
    query: "",
    services: [],
  });
  const servicesList = [
    "WeddingCoverage",
    "Pre-wedding",
    "MaternityPhotoshoot",
    "Anniversary",
    "CorporateShoot",
    "ProductShoot",
    "ModalingShoot",
    "KidsShoot",
    "Birthday",
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    console.log(selectedServices);
  }, [selectedServices]);
  /* -------------------------------------------------------------------------- */
  /*                          on change of input values                         */
  /* -------------------------------------------------------------------------- */
  function onChange(e) {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  /* -------------------------------------------------------------------------- */
  /*                           for handling checkboxes                          */
  /* -------------------------------------------------------------------------- */
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedServices((prev) => [...prev, name]);
    } else {
      setSelectedServices((prev) => prev.filter((service) => service !== name));
    }
  };
  /* -------------------------------------------------------------------------- */
  /*                                  onsubmit                                  */
  /* -------------------------------------------------------------------------- */
  function register(e) {
    e.preventDefault();

    try {
      setLoader(true);
      const response = axios.post(
        "https://danish-backend.onrender.com/register",
        {
          ...data,
          services: selectedServices,
        }
      );
      setLoader(false);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  }
  return (
    <div className=" w-full bg-stone-100">
      <div className="w-full mx-auto px-16 pt-24 py-12   shadow-md rounded-lg ">
        <h2 className="lg:text-4xl text-lg uppercase font-semibold text-stone-500 py-8 mb-6 text-center">
          Contact Us
        </h2>

        <form className="lg:px-48 px-2 flex flex-col gap-5" onSubmit={register}>
          <div className=" w-full flex lg:flex-row lg:gap-12 gap-5 flex-col justify-between ">
            <div className="w-full flex flex-col gap-2">
              <label className=" text-gray-700 font-bold   " htmlFor="name">
                Name
              </label>

              <input
                type="text"
                name="name"
                className="w-full px-3 py-2  rounded-lg "
                onChange={onChange}
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
                name="email"
                onChange={onChange}
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
                onChange={onChange}
                type="text"
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
                onChange={onChange}
                name="phoneNumber"
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
              onChange={onChange}
              name="dateOfEvent"
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
              onChange={onChange}
              name="message"
              className="w-full px-3 py-2 border rounded-lg "
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Services Interested In
            </label>

            {servicesList.map((item, idx) => (
              <div key={idx + item} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name={item}
                  className="mr-2"
                />
                <label htmlFor="weddingCoverage" className="text-gray-700">
                  {item}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="hearAboutUs"
            >
              How Did You Hear About Us?
            </label>
            <input
              onChange={onChange}
              type="text"
              name="reachedThrough"
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
              name="query"
              onChange={onChange}
              className="w-full px-3 py-2 border rounded-lg "
            />
          </div>

          <div className=" flex items-center justify-center py-4">
            <button
              type="submit"
              disabled={loader}
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
