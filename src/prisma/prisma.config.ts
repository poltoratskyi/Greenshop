export default {
  datasources: {
    db: {
      url: process.env.POSTGRES_URL,
      directUrl: process.env.POSTGRES_URL_NON_POOLING,
    },
  },
};
