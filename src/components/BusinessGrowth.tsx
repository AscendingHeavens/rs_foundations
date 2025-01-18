import * as React from "react";
import { useState } from "react";
import { FormField } from "./FormField";
import { BusinessFeature } from "./BusinessFeature";

const features = [
  {
    title: "Connect 1-on-1",
    description: [
      "with a LocaliQ consultant for a personalized",
      "walkthrough aligned with your unique growth goals.",
    ],
  },
  {
    title: "Explore innovative solutions",
    description: [
      "meticulously crafted to help you",
      "achieve your vision for driving revenue, maximizing profits, and",
      "scaling your business",
    ],
  },
  {
    title: "Gain valuable insights",
    description: [
      "from our digital marketing experts on",
      "optimized strategies to maximize your results.",
    ],
  },
];

export const BusinessGrowth: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setIsLoading(true);
    setMessage("");

    // Placeholder API URL for now
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Replace with actual API

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setMessage("Your request has been submitted successfully!");
        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phone: "",
          website: "",
          businessType: "",
        });
      } else {
        setIsSuccess(false);
        setMessage("There was an error. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("There was an error. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col pt-44 w-full max-md:pt-24 max-md:max-w-full" id="form">
      <div className="self-center max-w-full w-[1172px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-lg font-semibold leading-8 text-neutral-800 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-5xl leading-[50px] max-md:text-4xl max-md:leading-[49px]">
                Accelerate Your
                <br />
                Business Growth
              </div>
              {features.map((feature, index) => (
                <BusinessFeature key={index} {...feature} />
              ))}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f3a46e1b24299d831e0f26c8ebb0d22c3b9a4aeac711e050ca22c15977a333?placeholderIfAbsent=true&apiKey=bc78d96b1bfe4229ab8bdab79a935f37"
              alt="Business growth illustration"
              className="object-contain max-w-full aspect-[1.62] w-[600px]"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <form
              className="flex overflow-hidden flex-col px-10 py-12 mx-auto w-full text-base font-semibold leading-loose bg-blue-50 rounded-[30px] text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-5 max-md:max-w-full">
                <FormField
                  label="First name"
                  id="firstName"
                  
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <FormField
                  label="Last name"
                  id="lastName"
                  
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <FormField
                label="Company name"
                id="companyName"
               
                value={formData.companyName}
                onChange={handleChange}
              />
              <FormField
                label="Email address"
                id="email"
                
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormField
                label="Phone number"
                id="phone"
               
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              <FormField
                label="Website URL"
                id="website"
               
                type="url"
                value={formData.website}
                onChange={handleChange}
              />
              <div className="flex flex-col">
                <label htmlFor="businessType" className="self-start mt-7">
                  Business type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="p-4 mt-2.5 text-gray-500 bg-white rounded-xl border border-gray-500 border-solid max-md:pr-5 max-md:max-w-full"
                  aria-label="Select business type"
                >
                  <option value="">Select one</option>
                  <option value="tech">Tech</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              <button
                type="submit"
                className="self-start px-9 py-5 mt-8 leading-none text-center text-white bg-blue-700 rounded-xl border border-blue-700 border-solid max-md:px-5"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Grow my business"}
              </button>
            </form>
            {message && (
              <div
                className={`mt-4 text-center ${isSuccess ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col items-start px-20 mb-0 w-full bg-white max-md:px-5 max-md:mb-2.5 max-md:max-w-full" />
    </div>
  );
};
