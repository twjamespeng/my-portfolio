import type { Project } from "@/types/project";
import Link from "next/link";

export default function ProjectCard({
  title,
  summary,
  tech,
  demoUrl,
  repoUrl,
}: Project) {
  return (
    <div className="border border-teal-800 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-dark flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{summary}</p>

      <ul className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <li
            key={t}
            className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex space-x-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
