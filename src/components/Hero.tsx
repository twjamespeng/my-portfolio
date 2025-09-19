export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-50 from-teal-900 to-[#171717] text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m <span className="text-teal-500">James</span>
      </h1>

      {/* 英文標語 */}
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mb-2">
        A Web Designer & Frontend Developer passionate about building beautiful, fast, and user-friendly websites.
      </p>

      {/* 中文標語 */}
      <p className="text-sm md:text-lg text-gray-500 max-w-2xl">
        網頁設計師 & 前端開發者，專注於設計美觀、快速且友善的網站。
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

