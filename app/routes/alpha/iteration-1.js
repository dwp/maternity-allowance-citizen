
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 1 ******************** /
// **************** START A CLAIM ****************** /

router.post('/beta-private/iteration-1/start-a-claim/', function (req, res) {
  // has a match been made, in this scenario?
  var match = "no";

  if (match == 'no') {
    var match = null;
    res.redirect('/beta-private/iteration-1/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-1/start-a-claim/about-the-baby');
  }
});

router.post('/beta-private/iteration-1/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-1/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-1/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-1/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-1/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-1/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-1/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-1/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-1/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-1/start-a-claim/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-1/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-1/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-1/start-a-claim/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-1/start-a-claim/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-1/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-1/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-1/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-1/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-1/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-1/start-a-claim/summary');
});

// **************** FIND A CLAIM ****************** /

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-1/find-a-claim/');
});

router.post('/beta-private/iteration-1/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-1/find-a-claim/summary');
});

router.post('/alpha/iteration-1/start-a-claim/what-is-your-name', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/about-the-baby2');
});

}
