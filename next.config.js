function throwError(envVar) {
  throw `Abort: You need to define ${envVar} in the .env file.`
}

if (!process.env.RESEND_API_KEY) return throwError("RESEND_API_KEY")

const CopyPlugin = require("copy-webpack-plugin")

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.experiments.asyncWebAssembly = true

    config.plugins = [
      ...config.plugins,
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/ic-vetkd-utils/ic_vetkd_utils_bg.wasm",
            to: "server/static/wasm/ae0025c41591870c.wasm",
          },
        ],
      }),
    ]
    return config
  },
}
