import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import data from "../Data/Product"; // Ensure the path to product.js is correct

const SingleProduct = () => {
  const { productId } = useParams(); // Use useParams to get the 'id' from the URL params
  const product = data.find((item) => item.id === parseInt(productId));
  const [selectedSize, setSelectedSize] = useState("500ML");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { name, imageUrls, price, sizes, description, composition, howTouse } =
    product;

  // Function to change the main image after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const sendMessageToWhatsApp = (name) => {
    // Define the WhatsApp number and message
    const phoneNumber = "+919799491249"; // Replace with the actual phone number
    const message = `I want to know more about ${name}`; // Replace with your desired message

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open the WhatsApp chat in a new tab when the button is clicked
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex flex-col p-4 md:flex-row md:h-screen">
      {/* left side image */}
      <div>
        <div className="main-image w-96 h-96 lg:w-[500px] lg:h-[500px] relative object-contain">
          <img
            src={imageUrls[currentImageIndex]}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover left-[-50px]"
          />
        </div>

        <div className="flex flex-col md:flex-row sm:justify-center sm:items-center ">
          <ul className="md:mr-auto flex flex-row md:mt-0 relative object-fill w-48 h-36">
            {imageUrls.map((imageUrl, index) => (
              <li key={index} onClick={() => handleImageClick(index)}>
                <img src={imageUrl} alt={name} className="w-56 h-16" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* right side div */}
      <div className="relative justify-center align-middle md:pt-14">
        <h1 className="text-3xl font-bold text-center">{name}</h1>
        <div>
          <p className="font-semibold text-xl">Select Size:</p>
          <select
            className="border font-medium text-xl text-center"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            {sizes.map((size) => (
              <option key={size} value={size} className="font-mediumx">
                {size}
              </option>
            ))}
          </select>
          <p className="font-semibold text-xl">
            MRP: Rs.{price[selectedSize]}/-
          </p>
        </div>
        {/* Description */}
        <h1 className="font-semibold text-left text-lg">Description</h1>
        <p className="text-justify text-lg ">{description}</p>
        <br />
        <h1 className="font-semibold text-left text-lg">Compostion</h1>
        <p className="text-justify text-lg ">{composition}</p>
        <br />

        <h1 className="font-semibold text-left text-lg">How to Use</h1>
        <p className="text-justify text-lg ">{howTouse}</p>

        <div className="pt-5">
          <p className="pb-2">For more Details click on the Whatsapp</p>

          <button
            className="p-4 text-xl rounded-full"
            style={{ background: "#075e54", color: "white" }}
            onClick={() => sendMessageToWhatsApp(name)}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="px-2" />
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
