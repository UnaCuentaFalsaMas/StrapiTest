module.exports = {
    async afterCreate(event) {
        const { result } = event;
        // Your logic here, for example:
        // console.log('Created entry:', result);
        try{
            console.log('Sending email notification...');
            await strapi.plugin('email').service('email').send({
                to: "unbotdemuchos@gmail.com",
                from: 'postmaster@sandbox9099bac1a9dd457bbdff569af5fae163.mailgun.org',
                subject: 'New entry created',
                text: `A new entry has been created: ${JSON.stringify(result)}`,
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
};