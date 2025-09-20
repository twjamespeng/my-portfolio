/**
 * 幫路徑加上 NEXT_PUBLIC_BASE_PATH
 * - 自動處理空白
 * - 避免重複的 `/`
 */
export function withBasePath(path: string): string {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
  if (!basePath) return path;

  if (basePath.endsWith("/") && path.startsWith("/")) {
    return `${basePath}${path.slice(1)}`;
  }
  return `${basePath}${path}`;
}
