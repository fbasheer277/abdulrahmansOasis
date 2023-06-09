'use strict';

/**
 * contact router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact.contact', {
    config: {
        find: {
        },
        findOne: {
        },
        create: {
            policies: [
                //   "plugins::users-permissions.ratelimit"
                //   'global::recaptcha'
            ],
        },
        update: {
        },
        delete: {
        },
    },
});
