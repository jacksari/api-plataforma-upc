'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findOneBySlug: async ctx => {
    // const id = ctx.params.id;
    const { slug } = ctx.params;
    const cursos = await strapi.query('cursos').search({_q: slug})
    return cursos;
  },
};
