export default ({ env }) => ({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 10000,
  app: {
    keys: process.env.APP_KEYS.split(','),
  },
});
