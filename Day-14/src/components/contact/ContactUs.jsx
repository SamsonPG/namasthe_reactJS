const contactUs = () => {
  return (
    <div >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="font-bold mt-5">Contact Us</h1>
        </div>
        <div className="flex justify-center items-center bg-white shadow-md rounded-lg pb-8">
          <form className="space-y-6 w-96 rounded-lg shadow-lg m-4 p-10 bg-zinc-100">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 ">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 ">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-block w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
