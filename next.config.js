const {
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  JWT_PRIVATE_KEY,
  VERIFY_AUTH_URL,
} = process.env;

module.exports = {
  env: {
    GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN,
    JWT_PRIVATE_KEY,
    VERIFY_AUTH_URL,
  },
};

module.exports = {
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false, crypto: false, stream: false };
    return config;
  },
};