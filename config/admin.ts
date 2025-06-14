export default ({ env }) => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET,
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT,
  },
  transfer: {
    token: {
      salt: process.env.TRANSFER_TOKEN_SALT,
    },
  },
  secrets: {
    encryptionKey: process.env.ENCRYPTION_KEY,
  },
  flags: {
    nps: process.env.FLAG_NPS || true,
    promoteEE: process.env.FLAG_PROMOTE_EE || true,
  },
});
