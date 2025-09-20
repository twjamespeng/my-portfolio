"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#121212] text-center text-white px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        如果您對我的作品有興趣，歡迎聯絡我：
      </p>

      <a
        href="mailto:tw.james.peng@gmail.com"
        className="text-teal-400 text-xl md:text-2xl hover:underline"
      >
        tw.james.peng@gmail.com
      </a>
    </section>
  );
}
