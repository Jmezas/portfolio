import type { NextConfig } from 'next';

/**
 * Identificador de cada build. Se incrusta en el HTML, en /version y en /sw.js:
 * cuando cambia, el service worker se reinstala y la página abierta se recarga sola.
 */
const buildId = process.env.BUILD_ID ?? Date.now().toString(36);

const nextConfig: NextConfig = {
  output: 'standalone',
  generateBuildId: () => buildId,
  env: { NEXT_PUBLIC_BUILD_ID: buildId },
};

export default nextConfig;
