module.exports = {
  poweredByHeader: false,
  env: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    SLS_ROLE_ARN: process.env.SLS_ROLE_ARN,
    SLS_POLICY: process.env.SLS_POLICY,
    SLS_CLOUDFRONT_DISTRIBUTION_ID: process.env.SLS_CLOUDFRONT_DISTRIBUTION_ID,
    SLS_BUCKET_NAME: process.env.SLS_BUCKET_NAME,
    SLS_BUCKET_REGION: process.env.SLS_BUCKET_REGION,
  },
};
