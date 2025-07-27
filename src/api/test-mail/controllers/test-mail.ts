/**
 * test-mail controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::test-mail.test-mail",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);

      strapi.log.debug("Request body:", ctx.request.body);

      // Log the full response to see its structure
      strapi.log.info("Full response object:", response);

      // --- FIX IS HERE ---
      // The created entry is in `response.data`, not `response.result`
      const newEntry = response.data;

      // This log will now correctly print the created entry object
      strapi.log.info(
        "Extracted entry:",
        JSON.stringify(newEntry, null, 2),
      );

      if (newEntry) {
        try {
          // Now this code will run
          await strapi
            .service("api::test-mail.test-mail")
            .sendNewEntryEmail(newEntry);
          strapi.log.info("Email service was called successfully.");
        } catch (error) {
          strapi.log.error("Error sending email:", error);
        }
      }
      return response;
    },
  }),
);