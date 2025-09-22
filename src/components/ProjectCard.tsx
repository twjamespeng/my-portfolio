import type { Project } from "@/types/project";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";

export default function ProjectCard({
  title,
  summary,
  tech,
  thumbnailUrl,
  demoUrl,
  repoUrl,
  pdfUrl
}: Project) {
  const resolvedThumbnail = thumbnailUrl ? withBasePath(thumbnailUrl) : null;
  return (
    <div className="border border-teal-800 rounded-xl p-5 shadow-sm hover:shadow-md bg-transparent hover:bg-teal-900/30 transition-all duration-300 flex flex-col h-full">
      {thumbnailUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          {resolvedThumbnail && (
            <Image
              src={resolvedThumbnail}
              alt={title}
              width={600}
              height={310}
              priority={false}
              className="rounded-md mb-2 hover:scale-105 transition-transform duration-300 ease-in-out"
              title={title}
            />
          )}
        </a>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{summary}</p>

      <ul className="flex flex-wrap gap-2 mt-3 mb-4">
        {tech.map((t) => (
          <li
            key={t}
            className="text-xs px-2 py-1 border border-teal-500 rounded-full text-teal-500"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="flex space-x-3 mt-auto">
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
            {pdfUrl ? "Repo (Private)" : "Repo"}
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            企劃書PDF
          </a>
        )}
      </div>
    </div>
  );
}
