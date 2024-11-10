"use client";
import {
  Disclosure,
  DisclosureButton,
  Transition,
  DisclosurePanel,
} from "@headlessui/react";
import React, { useState } from "react";

export function PopupWidget() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    section: "Tech", // Default section
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    // Placeholder API URL for now
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Placeholder API

    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const json = await response.json();
        setIsSuccess(true);
        setMessage("Your request has been submitted!");
        setFormData({
          name: "",
          email: "",
          section: "Tech",
          message: "",
        });
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("There was an error. Please try again.");
        console.log(error);
      });
  };

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>
            </DisclosureButton>

            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="p-6 sm:w-[350px] sm:h-auto bg-white border border-gray-300 shadow-xl rounded-md">
                  <h3 className="text-lg text-center text-indigo-600">
                    How can we help?
                  </h3>

                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-600"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-600"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Section Dropdown */}
                    <div className="mb-4">
                      <label
                        htmlFor="section"
                        className="block text-sm text-gray-600"
                      >
                        Select Section
                      </label>
                      <select
                        id="section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="Tech">Tech</option>
                        <option value="Solution">Solution</option>
                        <option value="Media">Media</option>
                      </select>
                    </div>

                    {/* Dynamic Message Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm text-gray-600"
                      >
                        {formData.section === "Tech" ? "Suggestion" : "Request"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder={
                          formData.section === "Tech"
                            ? "Your Suggestion"
                            : "Your Request"
                        }
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full px-3 py-4 bg-indigo-500 text-white rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

                  {/* Success or Error Message */}
                  {message && (
                    <p
                      className={`text-center ${
                        isSuccess ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
