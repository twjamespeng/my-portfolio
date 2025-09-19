export default function Footer() {
  return (
    <footer className="text-center py-6 mt-12">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} James Peng. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/twjamespeng"
          target="_blank"
          className="text-gray-500 hover:text-gray-800"
        >
          GitHub
        </a>
        {/* <a
          href="https://linkedin.com"
          target="_blank"
          className="text-gray-500 hover:text-gray-800"
        >
          LinkedIn
        </a> */}
      </div>
    </footer>
  );
}
