export default ({ env }) => ({
    email: {
    config: {
      provider: 'mailgun', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        key: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN'),
      },
      settings: {
        defaultFrom: 'postmaster@sandbox9099bac1a9dd457bbdff569af5fae163.mailgun.org',
        defaultReplyTo: 'unbotdemuchos@gmail.com',
        testAddress: 'unbotdemuchos@gmail.com',
      },
    },
  },
  upload: {

    config: {

      provider: 'cloudinary',

      providerOptions: {

        cloud_name: env('CLOUDINARY_NAME'),

        api_key: env('CLOUDINARY_KEY'),

        api_secret: env('CLOUDINARY_SECRET'),

      },

      actionOptions: {

        upload: {},

        delete: {},

      },

    },

  },
});
