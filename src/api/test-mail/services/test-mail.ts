/**
 * test-mail service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
    "api::test-mail.test-mail",
    ({ strapi }) => ({
        async sendNewEntryEmail(entry) {
            try {
                strapi.log.info(`Sending email with entry: ${JSON.stringify(entry, null, 2)}`);
                const textoCoreo = `Nuevo mensaje desde ${entry.origen}:\n\n
                                    Nombre:\n ${entry.nombre}\n
                                    Email:\n ${entry.email}\n
                                    Asunto:\n ${entry.asunto}\n
                                    Motivo:\n ${entry.motivo}\n
                                    Mensaje:\n ${entry.mensaje}\n
                                    `;
                await strapi.plugin("email").service("email").send({
                    to: "hectorlaclaveweb@gmail.com",
                    from: "postmaster@sandbox9099bac1a9dd457bbdff569af5fae163.mailgun.org",
                    subject: "Mensaje de HasheWeb",
                    // Use JSON.stringify to format the object as a readable string
                    text: textoCoreo,
                    //   html: `<h4>A new entry has been created.</h4><pre>${JSON.stringify(
                    //     entry,
                    //     null,
                    //     2,
                    //   )}</pre>`,
                });
                strapi.log.info("Email sent successfully via provider.");
            } catch (error) {
                strapi.log.error("Error from email provider:", error);
            }
        },
    }),
);