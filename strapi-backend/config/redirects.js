module.exports = async (ctx, next) => {
    if (ctx.request.url === '/projects/contact-manager') {
      ctx.status = 301; // Status code for permanent redirect
      ctx.redirect('https://contact-manager-rosy.vercel.app/');
    } else {
      await next(); // Call the next middleware in the stack
    }
  };
  