// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/commerce/:path*",
        destination: "/e-commerce/:path*",
        permanent: true,
      },
      {
        source: "/contato",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/contato/",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/agende-uma-consultoria",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/agendar-consultoria",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/consultoria",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/agendar",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/aplicar",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "yamajistudio.com.br" }], // sem www
        destination: "https://www.yamajistudio.com.br/:path*",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
