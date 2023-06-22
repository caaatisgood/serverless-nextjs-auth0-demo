const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  poweredByHeader: false,
  env: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  },
}

const SENTRY_TUNNEL_ROUTE = "/monitoring";
const rewrites = () => {
  const { orgId, projectId } = getSentryConfig();
  return [
    {
      source: SENTRY_TUNNEL_ROUTE,
      destination: `https://o${orgId}.ingest.sentry.io/api/${projectId}/envelope/`,
    },
  ];
};

const getSentryConfig = () => {
  const regex = /o(\d+)\.ingest\.sentry\.io\/(\d+)/;
  const match = process.env.NEXT_PUBLIC_SENTRY_DSN.match(regex);
  if (!match) {
    console.log("Unable to parse Sentry config from DSN");
    return;
  }
  return {
    orgId: match[1],
    projectId: match[2],
  };
};

let wrappedConfig = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "caaatisgood",
    project: "serverless-nextjs-auth0-demo",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: SENTRY_TUNNEL_ROUTE,

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
)

wrappedConfig = {
  ...wrappedConfig,
  rewrites,
};

module.exports = wrappedConfig
