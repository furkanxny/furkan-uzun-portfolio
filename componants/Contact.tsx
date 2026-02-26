"use client";

import { useState } from "react";

export const Contact = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
    console.log(text);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-72 space-y-4">
      <div className="bg-orange-500 flex flex-col items-center justify-center rounded-lg p-4 gap-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      <input
        name="name"
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2"
        placeholder="Name"
        value={text.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-md px-4 py-2"
        value={text.email}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name="message"
        className="border border-gray-300 rounded-md px-4 py-2"
        placeholder="Message"
        value={text.message}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Send
      </button>
      </div>
    </section>
  );
};