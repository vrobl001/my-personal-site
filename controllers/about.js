module.exports = {
  index,
};

function index(req, res, next) {
  res.render('about/index', { title: 'About' });
}
