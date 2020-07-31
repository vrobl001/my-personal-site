module.exports = {
  index,
};

function index(req, res, next) {
  res.render('projects/index', { title: 'Projects' });
}
