/**
 * evaluation router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::evaluation.evaluation', {
  prefix: '',
  only: ['find', 'findOne'],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    create: {},
    update: {},
    delete: {},
  },
});
