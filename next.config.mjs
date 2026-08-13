// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
  const fileLoadRule = config.module.rules.find((run) =>
  rule.test?.test?.(".svg")
  );

  config.module.rules.push( 
    {
      ...fileLoadRule,
      test: /\.svg/i,
      resourceQuery: /yrl/,
    },
    {
      test: /\.svg$/i,
      issuer: findLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/]},
      use: {
        loader: "@svgr/wenpack",
        options:{
          svgoConfig: {
            Plugins: [
              {
                name: "present-default",
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
  )

 }
}
