module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd19987c5e6d277c8283d23cedd6bd6eb'),
  },
});
