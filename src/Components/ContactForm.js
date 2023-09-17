export function ContactForm() {
  return (
    <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div class="relative rounded-lg bg-white p-8 shadow-lg shadow-gray-200 sm:p-12">
        <form action="https://formcarry.com/s/N8bf2zvNY_" method="POST" accept-charset="UTF-8">
          <p class="mb-2 font-semibold text-xl">Contact Form</p>
          <div class="mb-6">
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Your first name and last name" class="border-[f0f0f0] w-full rounded-md border py-3 px-[14px] text-base outline-none focus:border-blue-600 focus:drop-shadow-lg" required />
          </div>
          <div class="mb-6">
            <label>Your Email Address</label>
            <input type="email" name="email" placeholder="Example@example.com" class="border-[f0f0f0]  w-full rounded-md border py-3 px-[14px] text-base outline-none focus:border-blue-600 focus:drop-shadow-lg" required />
          </div>
          <div class="mb-6">
            <label>Your message</label>
            <textarea rows="6" name="message" placeholder="Enter your message" class="border-[f0f0f0] w-full rounded-md border py-3 px-[14px] text-base outline-none resize-none focus:border-blue-600 focus:drop-shadow-lg"></textarea>
            <input type="hidden" name="_gotcha" />
          </div>
          <div>
            <button type="submit" class="bg-blue-600 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
