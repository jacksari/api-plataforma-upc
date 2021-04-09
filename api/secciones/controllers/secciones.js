'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findByCurso: async ctx => {
    // const id = ctx.params.id;
    const { curso } = ctx.params;
    console.log(curso)
    const secciones = await strapi.query('secciones').search({_q: curso})
    return secciones;
  },
};
