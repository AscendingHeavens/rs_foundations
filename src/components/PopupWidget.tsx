"use client";

import {
  Disclosure,
  DisclosureButton,
  Transition,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export function PopupWidget() {
  const [formData, setFormData] = useState<FormRequest>({
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
              {open ? (
                <XMarkIcon
                  className="absolute w-6 h-6 dark:text-white text-white"
                  aria-hidden="true"
                />
              ) : (
                <ChatBubbleOvalLeftEllipsisIcon
                  className="absolute w-6 h-6 dark:text-white text-white"
                  aria-hidden="true"
                />
              )}
            </DisclosureButton>

            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex flex-col overflow-hidden w-full h-full sm:max-w-[350px] border border-gray-300 dark:border-gray-800 dark:bg-black bg-white shadow-2xl rounded-md">
                <div className="p-6 sm:w-[350px] flex flex-col justify-center h-full dark:bg-black bg-white border border-gray-300 shadow-xl rounded-md">
                  <h3 className="text-lg text-center dark:text-purple-500  text-indigo-600">
                    Please Provide Suggestions or Requests
                  </h3>

                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm dark:text-white text-gray-600"
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
                        className="block text-sm dark:text-white text-gray-600"
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
                        className="block text-sm dark:text-white text-gray-600"
                      >
                        Select Section
                      </label>
                      <select
                        id="section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border dark:text-white border-gray-300 rounded-md"
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
                        className="block text-sm dark:text-white text-gray-600"
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
                        className="w-full px-3 py-2 border dark:text-white border-gray-300 rounded-md"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full px-3 py-4 bg-indigo-500 dark:text-white text-white rounded-md"
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
