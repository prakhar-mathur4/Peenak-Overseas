import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic here to send form data to a server if needed
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24"
      >
        {/* Contact Information */}
        <div className=" ">
          <h2 className="text-2xl font-semibold mb-4 text-center underline">
            Contact Information
          </h2>
          <div className="md:pt-20">
            <div className="grid gap-2">
              {/* Location */}
              <div className="">
                <h3 className="font-semibold text-center">Location:</h3>
                <p className="text-center">
                  11/47, Kaveri Path, Mansarovar, Jaipur Pin:302020
                </p>
              </div>
              {/* Contact Number */}
              <div>
                <h3 className="font-semibold text-center">Contact No:</h3>
                <p className="text-center">+91 9799491249 , +91 6376267162</p>
              </div>
              {/* Email */}
              <div>
                <h3 className="font-semibold text-center">Email:</h3>
                <p className="text-center">peenakoverseas@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          {/* Other input fields - Email, Message */}

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-3 py-2 w-full h-32 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-main-light font-bold py-2 px-4 rounded"
            style={{ color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center mt-8">
        <iframe
          className=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8722633209477!2d75.7523645751501!3d26.875799176669187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db565c1b22e91%3A0x75a417df06efa280!2sPeenak%20Overseas!5e0!3m2!1sen!2sin!4v1701330678983!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
