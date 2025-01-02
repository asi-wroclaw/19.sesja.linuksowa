/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'custom',
    imageSizes: [16, 48, 96, 256, 384],
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  publicRuntimeConfig: {
    SHOW_AGENDA: process.env.SHOW_AGENDA,
    SHOW_SPEAKERS: process.env.SHOW_SPEAKERS,
    SHOW_CALL_FOR_PAPERS: process.env.SHOW_CALL_FOR_PAPERS,
    ENABLE_CREATOR: process.env.ENABLE_CREATOR,
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'false',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};
