'use strict';

/**
 * featured-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-course.featured-course');
