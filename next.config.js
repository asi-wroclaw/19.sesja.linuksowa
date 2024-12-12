/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    SHOW_AGENDA: process.env.SHOW_AGENDA,
    SHOW_SPEAKERS: process.env.SHOW_SPEAKERS,
    SHOW_CALL_FOR_PAPERS: process.env.SHOW_CALL_FOR_PAPERS,
    ENABLE_CREATOR: process.env.ENABLE_CREATOR,
  },
};
