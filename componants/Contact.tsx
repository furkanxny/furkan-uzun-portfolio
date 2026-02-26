export const Contact = () => {
  return (
    <section className="bg-orange-500 flex flex-col items-center justify-center w-full h-72 space-y-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 rounded-md px-4 py-2"
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-md px-4 py-2"
      />
      <textarea
        placeholder="Message"
        className="border border-gray-300 rounded-md px-4 py-2"
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Send
      </button>
    </section>
  );
};
