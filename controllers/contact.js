module.exports = {
  index,
};

function index(req, res, next) {
  res.render('contact/index', { title: 'Contact' });
}
