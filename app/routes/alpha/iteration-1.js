
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
  res.redirect('/alpha/iteration-1/start-a-claim/nino');
});

router.post('/alpha/iteration-1/start-a-claim/nino', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/dob');
});

router.post('/alpha/iteration-1/start-a-claim/dob', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/confirm-details');
});

router.post('/alpha/iteration-1/start-a-claim/confirm-details', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/previous-address');
});

router.post('/alpha/iteration-1/start-a-claim/previous-address', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/MATB1');
});

router.post('/alpha/iteration-1/start-a-claim/MATB1', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/SMP1');
});

router.post('/alpha/iteration-1/start-a-claim/SMP1', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/baby-due');
});

router.post('/alpha/iteration-1/start-a-claim/baby-due', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/baby-born');
});

router.post('/alpha/iteration-1/start-a-claim/baby-born', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/baby-birth-date');
});

router.post('/alpha/iteration-1/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employment-test-dates');
});

router.post('/alpha/iteration-1/start-a-claim/employment-test-dates', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employment-type');
});

router.post('/alpha/iteration-1/start-a-claim/employment-type', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-name');
});

router.post('/alpha/iteration-1/start-a-claim/employer-name', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-phone-number');
});

router.post('/alpha/iteration-1/start-a-claim/employer-phone-number', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employment-first-date');
});

router.post('/alpha/iteration-1/start-a-claim/employment-first-date', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employment-last-date');
});

router.post('/alpha/iteration-1/start-a-claim/employment-last-date', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employment-id');
});

router.post('/alpha/iteration-1/start-a-claim/employment-id', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/payment-frequency');
});

router.post('/alpha/iteration-1/start-a-claim/payment-frequency', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/another-employer');
});

router.post('/alpha/iteration-1/start-a-claim/another-employer', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-stop');
});

router.post('/alpha/iteration-1/start-a-claim/employer-stop', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-leave');
});

router.post('/alpha/iteration-1/start-a-claim/employer-leave', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-1/start-a-claim/employer-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employer-sick');
});

router.post('/alpha/iteration-1/start-a-claim/employer-sick', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/mat-start');
});

router.post('/alpha/iteration-1/start-a-claim/mat-start', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/mat-leave-start');
});

router.post('/alpha/iteration-1/start-a-claim/mat-leave-start', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-1/start-a-claim/employed-abroad', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/other-benefits');
});

router.post('/alpha/iteration-1/start-a-claim/other-benefits', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/map-start');
});

router.post('/alpha/iteration-1/start-a-claim/map-start', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/mat-frequency');
});

router.post('/alpha/iteration-1/start-a-claim/mat-frequency', function (req, res) {
  res.redirect('/alpha/iteration-1/start-a-claim/bank-details');
});




}
