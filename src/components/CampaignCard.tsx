import type { Campaign } from "@/types/campaign";
import Image from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function CampaignCard({
  title,
  summary,
  tech,
  demoUrl,
  thumbnailUrl,
}: Campaign) {
  // 取得 basePath（在 next.config.ts 設定）
  const basePath = publicRuntimeConfig?.basePath || "";

  // 自動補完整路徑
  const resolvedThumbnail = thumbnailUrl ? `${basePath}${thumbnailUrl}` : null;
  const resolvedDemoUrl = demoUrl ? `${basePath}${demoUrl}` : null;

  return (
    <div className="border border-teal-800 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-dark flex flex-col">
      {resolvedDemoUrl && (
        <a
          href={resolvedDemoUrl}
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
              className="rounded-md mb-2 hover:scale-105 transition-transform duration-300 ease-in-out"
              title={title}
            />
          )}
        </a>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm flex-1">{summary}</p>
      <ul className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <li
            key={t}
            className="text-xs px-2 py-1 border border-teal-500 rounded-full text-teal-500"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex space-x-3">
        {resolvedDemoUrl && (
          <a
            href={resolvedDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
