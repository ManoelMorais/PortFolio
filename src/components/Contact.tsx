export default function Contact() {
  return (
    <div className="bg-terciario">
      <div className="text-center py-20">
        <div>
          <h2 className="text-4xl text-headingcolor">Contact me</h2>
        </div>
        <div className="md:w-2/3 mx-auto p-10">
          <form
            action="https://formsubmit.co/999142818m@gmail.com"
            method="post"
            name="form"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center mb-8 justify-center">
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="name"
                  className="text-base text-headingcolor w-full"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block border border-primary rounded-lg py-2 mt-2 w-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="email"
                  className="text-base text-headingcolor w-full"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block border border-primary rounded-lg py-2 mt-2 w-full"
                  required
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label
                  htmlFor="phone"
                  className="text-base text-headingcolor w-full"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block border border-primary rounded-lg py-2 mt-2 w-full"
                  required
                />
              </div>
            </div>
            <div className="w-full mb-8">
              <label
                htmlFor="topic"
                className="text-base text-headingcolor w-full"
              >
                Choose a topic
              </label>
              <select
                name="topic"
                id="topic"
                className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
                required
              >
                <option value="">Select one...</option>
                <option value="front end">Front end</option>
                <option value="back end">Back end</option>
                <option value="full stack">Full stack</option>
              </select>
            </div>
            <div className="w-full mb-8">
              <label
                htmlFor="message"
                className="text-base text-headingcolor w-full"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
              ></textarea>
            </div>
            <div className="w-36 mx-auto border rounded-lg bg-principal  hover:bg-sky-400">
              <a href="mailto"></a>
              <input
                type="submit"
                value="Submit"
                className="btn-primary py-3 bg-primary px-8 text-extras rounded-b-md cursor-pointer inline-block w-full "
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
