// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack(config) {
  const fileLoaderRule = config.module.rules.find((rule) =>
  rule.test?.test?.(".svg")
  );

  config.module.rules.push( 
    // Reapply the existing rule, but only for svg imports ending in ?url 
    {
      ...fileLoaderRule,
      test: /\.svg/i,
      resourceQuery: /yrl/,
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/]},
      use: {
        loader: "@svgr/webpack",
        options:{
          svgoConfig: {
            Plugins: [
              {
                name: "preset-default",
                params:{
                  overrides: {
                    removeViewBox: false,
                  }
                }
              }
            ]
          }
        }
      }
    }
  );

  //Modify the file loader rule to ignore *.svg, since we have it handled now.
  fileLoadRule.exclude = /\.svg/i;

  return config;

 },
};

export default nextConfig;