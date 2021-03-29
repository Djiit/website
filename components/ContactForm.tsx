const ContactForm = () => (
  <div className="text-lg sm:text-lg mb-16">
    <form
      action="https://formspree.io/f/julien.tanay@gmail.com"
      method="POST"
      className="mb-12"
    >
      <div className="flex flex-wrap mb-6 -mx-4">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4">
          <label className="block mb-2 text-copy-primary" htmlFor="name">
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jon Snow"
            className="block w-full"
            required
          />
        </div>

        <div className="w-full px-4 md:w-1/2">
          <label className="block text-copy-primary mb-2" htmlFor="email">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="block w-full"
            placeholder="email@example.com"
            required
          />
        </div>
      </div>

      <div className="w-full mb-12">
        <label className="block text-copy-primary mb-2" htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          rows={5}
          name="message"
          className="block w-full p-4"
          placeholder="Enter your message here."
          required
        ></textarea>
      </div>

      <div className="flex justify-end w-full">
        <input
          type="submit"
          value="Submit"
          className="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase cursor-pointer px-6 py-3"
        />
      </div>
    </form>
  </div>
);

export default ContactForm;
