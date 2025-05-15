
module.exports = router => {

// Add your routes here - above the module.exports line

// (Used Alpha Iteration 10)
// **************** ITERATION 1 ******************** /
// **************** START A CLAIM ****************** /

router.post('/beta-private/iteration-8/start-a-claim/', function (req, res) {
  // has a match been made, in this scenario?
  var match = "no";

  if (match == 'no') {
    var match = null;
    res.redirect('/beta-private/iteration-8/start-a-claim/more-claimant-information');
  }
  else {
    res.redirect('/beta-private/iteration-8/start-a-claim/about-the-baby');
  }
});

router.post('/beta-private/iteration-8/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-8/start-a-claim/more-claimant-information', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-8/start-a-claim/claim-date', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/about-the-baby');
});

router.post('/beta-private/iteration-8/start-a-claim/about-the-baby', function (req, res) {
  if (req.session.data['baby-born'] == 'yes') {
    res.redirect('/beta-private/iteration-8/start-a-claim/baby-birth-date');
  }
  else {
    res.redirect('/beta-private/iteration-8/start-a-claim/date-last-worked');
  }
});

router.post('/beta-private/iteration-8/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/date-last-worked');
});

router.post('/beta-private/iteration-8/start-a-claim/date-last-worked', function (req, res) {
  if (req.session.data['stopped-work'] == 'yes') {
    res.redirect('/beta-private/iteration-8/start-a-claim/dlw-date');
  }
  else {
    if (req.session.data['action'] == 'change') {
      req.session.data['action'] = null;
      res.redirect('/beta-private/iteration-8/start-a-claim/summary');
    }
    else {
      res.redirect('/beta-private/iteration-8/start-a-claim/ma-start-date-provided');
    }
  }
});

router.post('/beta-private/iteration-8/start-a-claim/dlw-date', function (req, res) {
  if (req.session.data['action'] == 'change') {
    req.session.data['action'] = null;
    res.redirect('/beta-private/iteration-8/start-a-claim/summary');
  }
  else {
    res.redirect('/beta-private/iteration-8/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-8/start-a-claim/ma-start-date-provided', function (req, res) {
  if (req.session.data['ma-start-date-provided'] == 'yes') {
    res.redirect('/beta-private/iteration-8/start-a-claim/planned-dlw-date');
  }
  else {
    res.redirect('/beta-private/iteration-8/start-a-claim/chosen-map-date');
  }
});

router.post('/beta-private/iteration-8/start-a-claim/planned-dlw-date', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/chosen-map-date');
});

router.post('/beta-private/iteration-8/start-a-claim/chosen-map-date', function (req, res) {
  if (req.session.data['ma-date-requested'] == 'yes') {
    res.redirect('/beta-private/iteration-8/start-a-claim/requested-start-date');
  }
  else {
    res.redirect('/beta-private/iteration-8/start-a-claim/summary');
  }
});

router.post('/beta-private/iteration-8/start-a-claim/requested-start-date', function (req, res) {
  res.redirect('/beta-private/iteration-8/start-a-claim/summary');
});



// **************** FIND A CLAIM ****************** /

router.post('/beta-private/', function (req, res) {
  res.redirect('/beta-private/iteration-8/find-a-claim/');
});

router.post('/beta-private/iteration-8/find-a-claim/', function (req, res) {
  res.redirect('/beta-private/iteration-8/find-a-claim/summary');
});

router.post('/alpha/iteration-8/start-a-claim/what-is-your-name', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/nino');
});

router.post('/alpha/iteration-8/start-a-claim/nino', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/dob');
});

router.post('/alpha/iteration-8/start-a-claim/dob', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/confirm-details');
});

router.post('/alpha/iteration-8/start-a-claim/confirm-details', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/confirm-details-correspondence');
});

router.post('/alpha/iteration-8/start-a-claim/confirm-details-correspondence', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/telephone-number');
});

router.post('/alpha/iteration-8/start-a-claim/telephone-number', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/welsh-preferences');
});

router.post('/alpha/iteration-8/start-a-claim/welsh-preferences', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/reasonable-adjustment');
});

router.post('/alpha/iteration-8/start-a-claim/baby-due', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/reasonable-adjustment');
});

router.post('/alpha/iteration-8/start-a-claim/previous-address', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/MATB1');
});

router.post('/alpha/iteration-8/start-a-claim/MATB1', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-T2-summary');
});

router.post('/alpha/iteration-8/start-a-claim/baby-T2-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-3');
});

router.post('/alpha/iteration-8/start-a-claim/preferences', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/reasonable-adjustment');
});

router.post('/alpha/iteration-8/start-a-claim/address-preference', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/reasonable-adjustment');
});

router.post('/alpha/iteration-8/start-a-claim/reasonable-adjustment', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T1-summary');
});

router.post('/alpha/iteration-8/start-a-claim/baby-due-not-born', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/proof-2');
});

router.post('/alpha/iteration-8/start-a-claim/proof-2', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-T2-summary');
});

router.post('/alpha/iteration-8/start-a-claim/baby-due-born', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-DOB');
});

router.post('/alpha/iteration-8/start-a-claim/baby-DOB', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-birth-proof');
});

router.post('/alpha/iteration-8/start-a-claim/baby-birth-cert-number', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/proof-2');
});

router.post('/alpha/iteration-8/start-a-claim/MATB1-b', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-T2-summary');
});

router.post('/alpha/iteration-8/start-a-claim/MATB1-a', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-T2-summary');
});

router.post('/alpha/iteration-8/start-a-claim/baby-birth-pregnancy-proof', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/baby-T2-summary');
});

router.post('/alpha/iteration-8/start-a-claim/proof-of-birth', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/proof-2');
});

router.post('/alpha/iteration-8/start-a-claim/offrampEarly', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/proof');
});

router.post('/alpha/iteration-8/start-a-claim/proof', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/MATB1');
});

router.post('/alpha/iteration-8/start-a-claim/baby-birth-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-type');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/earnings-history-additional');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-select-employer', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-date');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-delete', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/earnings-history');
});

router.post('/alpha/iteration-8/start-a-claim/earnings-history', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/earnings-history-changed', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-amount');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-amount', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-upload');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-upload', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-summary');
});

router.post('/alpha/iteration-8/start-a-claim/earnings-history-additional', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/SMP1');
});

router.post('/alpha/iteration-8/start-a-claim/SMP1', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-stop');
});

router.post('/alpha/iteration-8/start-a-claim/SMP12', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-stop');
});

router.post('/alpha/iteration-8/start-a-claim/employment-test-dates', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-type');
});

router.post('/alpha/iteration-8/start-a-claim/employment-history', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/SMP1');
});

router.post('/alpha/iteration-8/start-a-claim/employment-type', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history');
});

router.post('/alpha/iteration-8/start-a-claim/employment-stop', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history');
});

router.post('/alpha/iteration-8/start-a-claim/employment-start', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history');
});

router.post('/alpha/iteration-8/start-a-claim/employer-new-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history-additional');
});

router.post('/alpha/iteration-8/start-a-claim/employment-history-additional', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/earnings-history');
});

router.post('/alpha/iteration-8/start-a-claim/employment-playback', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/another-employer');
});

router.post('/alpha/iteration-8/start-a-claim/employer-name', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-phone-number');
});

router.post('/alpha/iteration-8/start-a-claim/employer-phone-number', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-first-date');
});

router.post('/alpha/iteration-8/start-a-claim/employment-first-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-last-date');
});

router.post('/alpha/iteration-8/start-a-claim/employment-last-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-id');
});

router.post('/alpha/iteration-8/start-a-claim/employment-id', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payment-frequency');
});

router.post('/alpha/iteration-8/start-a-claim/payment-frequency', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/another-employer');
});

router.post('/alpha/iteration-8/start-a-claim/another-employer', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/SMP1');
});

router.post('/alpha/iteration-8/start-a-claim/employer-stop', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T3-summary');
});

router.post('/alpha/iteration-8/start-a-claim/employer-leave', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-8/start-a-claim/employer-sick', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/mat-start');
});
router.post('/alpha/iteration-8/start-a-claim/other-benefits', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/map-start');
});


router.post('/alpha/iteration-8/start-a-claim/mat-leave-start', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T3-summary');
});

router.post('/alpha/iteration-8/start-a-claim/employed-abroad', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T4-summary');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T3-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-4');
});

router.post('/alpha/iteration-8/start-a-claim/map-start', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/mat-frequency');
});

router.post('/alpha/iteration-8/start-a-claim/mat-frequency', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/bank-details');
});

router.post('/alpha/iteration-8/start-a-claim/employer-additional-name', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-additional-date');
});

router.post('/alpha/iteration-8/start-a-claim/employment-additional-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-additional-ongoing');
});

router.post('/alpha/iteration-8/start-a-claim/employment-additional-ongoing', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-additional-stop');
});

router.post('/alpha/iteration-8/start-a-claim/employment-additional-stop', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-new-summary');
});

router.post('/alpha/iteration-8/start-a-claim/employment-additional-id', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/another-employer');
});

router.post('/alpha/iteration-8/start-a-claim/pregnancy-sick', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-8/start-a-claim/annual-leave-end', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/sick-start', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-8/start-a-claim/employment-change-type', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-start-date');
});

router.post('/alpha/iteration-8/start-a-claim/employment-start-date', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-change-summary');
});

router.post('/alpha/iteration-8/start-a-claim/employer-change-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history-changed');
});

router.post('/alpha/iteration-8/start-a-claim/employment-history-changed', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/SMP1');
});

router.post('/alpha/iteration-8/start-a-claim/employment-delete-employer', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employment-history-deleted');
});

router.post('/alpha/iteration-8/start-a-claim/employment-history-deleted', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/SMP1');
});

router.post('/alpha/iteration-8/start-a-claim/sick-end', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employer-last-worked');
});

router.post('/alpha/iteration-8/start-a-claim/employer-last-worked', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/employed-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/bank-details', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T5-summary');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T5-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-complete');
});

router.post('/alpha/iteration-8/start-a-claim/check-answers', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/confirmation');
});

router.post('/alpha/iteration-8/start-a-claim/check-postcode', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-employment');
});

router.post('/alpha/iteration-8/start-a-claim/offrampPostcode', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-employment');
});

router.post('/alpha/iteration-8/start-a-claim/check-employment', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-benefits');
});

router.post('/alpha/iteration-8/start-a-claim/offrampEmployer', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-benefits');
});

router.post('/alpha/iteration-8/start-a-claim/check-employment', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-benefits');
});

router.post('/alpha/iteration-8/start-a-claim/check-employment', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/check-benefits');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-change-type', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-change-amount');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-change-amount', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-change-upload');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-change-upload', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/payslip-change-summary');
});

router.post('/alpha/iteration-8/start-a-claim/payslip-change-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/earnings-history-changed');
});

router.post('/alpha/iteration-8/start-a-claim/declaration-UC', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/work-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/declaration-other', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/work-abroad');
});

router.post('/alpha/iteration-8/start-a-claim/birth-certificate', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/proof-2');
});

router.post('/alpha/iteration-8/start-a-claim/work-abroad', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/OneLogin');
});

router.post('/alpha/iteration-8/start-a-claim/OneLogin', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-1');
});

router.post('/alpha/iteration-8/start-a-claim/bereavement-type', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/bereavement-upload');
});

router.post('/alpha/iteration-8/start-a-claim/bereavement-upload', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-1');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T1-address', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T1-correspondence');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T1-correspondence', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/telephone-number');
});

router.post('/alpha/iteration-8/start-a-claim/welsh-preferences', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/claimant-T1-summary');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T1-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-2');
});

router.post('/alpha/iteration-8/start-a-claim/claimant-T4-summary', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/task-5');
});

router.post('/alpha/iteration-8/start-a-claim/task-complete', function (req, res) {
  res.redirect('/alpha/iteration-8/start-a-claim/confirmation');
});

router.post('/i8-baby-born', function(request, response) {

  var babyBornAnswer = request.session.data['baby-born']
  if (babyBornAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/baby-due-born")
  } else {
      response.redirect("alpha/iteration-8/start-a-claim/baby-due-not-born")
  }
})

router.post('/i3-other-benefits', function(request, response) {

  var i3otherBenefitsAnswer = request.session.data['i3otherBenefits']
  if (i3otherBenefitsAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/test1")
  } else {
      response.redirect("alpha/iteration-8/start-a-claim/map-start")
  }
})


router.post('/etd-answer', function(request, response) {

  var etdAnswer = request.session.data['employmentTestDates']
  if (etdAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/employment-type")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/exit")
  }
})


router.post('/employmentOngoing-answer', function(request, response) {

  var employmentStop = request.session.data['employmentOngoingAnswer']
  if (employmentStop == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/employment-history")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/employment-stop")
  }
})

//router.post('/employment-type-answer', function(request, response) {

//  var employmentTypeAnswer = request.session.data['employmentType']
 // if (employmentTypeAnswer == "employed"){
 //     response.redirect("/alpha/iteration-8/start-a-claim/employment-playback")
 // } else if (employmentTypeAnswer == "selfEmployed"){
  //  response.redirect("/alpha/iteration-8/start-a-claim/test2")
//} 
//else if (employmentTypeAnswer == "agency"){
 // response.redirect("/alpha/iteration-8/start-a-claim/test3")
//} 
//else {
// response.redirect("/alpha/iteration-8/start-a-claim/test4")
//}
//})



router.post('/another-employer', function(request, response) {

  var anotherEmploymerAnswer = request.session.data['anotherEmployer']
  if (anotherEmploymerAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/employer-additional-name")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/employer-stop")
  }
})

router.post('/mat-start', function(request, response) {

  var matStartAnswer = request.session.data['matStart']
  if (matStartAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/mat-leave-start")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/employed-abroad")
  }
})

router.post('i3-employed-abroad', function(request, response) {

  var i3employedAbroadAnswer = request.session.data['i3employedAbroad']
  if (i3employedAbroadAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/test1")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/other-benefits")
  }
})

router.post('/i3-stop-work', function(request, response) {

  var i3stopWorkAnswer = request.session.data['i3stopWork']
  if (i3stopWorkAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/stop-work-reason")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/employed-abroad")
  }
})

router.post('/i8-check-baby', function(request, response) {

  var i8CheckBabyAnswer = request.session.data['i8checkBaby']
  if (i8CheckBabyAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/bereavement-type")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/task-1")
  }
})

router.post('/i8-stop-work-reason', function(request, response) {

  var i8stopWorkReasonAnswer = request.session.data['i8stopWorkReason']
  if (i8stopWorkReasonAnswer == "mat"){
      response.redirect("/alpha/iteration-8/start-a-claim/mat-leave-start")

  } else if (i8stopWorkReasonAnswer == "sick"){
    response.redirect("/alpha/iteration-8/start-a-claim/sick-leave-reason")

} 
else if (i8stopWorkReasonAnswer == "ended"){
  response.redirect("/alpha/iteration-8/start-a-claim/employer-last-worked")

} 
else if (i8stopWorkReasonAnswer == "annual"){
  response.redirect("/alpha/iteration-8/start-a-claim/annual-leave-end")

} 
else {
  response.redirect("/alpha/iteration-8/start-a-claim/claimant-T3-summary")
}
})



router.post('/i8-baby-birth-proof', function(request, response) {

  var babyProofAnswer = request.session.data['baby-proof']
  if (babyProofAnswer == "certificate"){
      response.redirect("/alpha/iteration-8/start-a-claim/baby-birth-cert-number")

  } else if (babyProofAnswer == "matb1"){
    response.redirect("/alpha/iteration-8/start-a-claim/MATB1-b")

} 
else if (babyProofAnswer == "letter"){
  response.redirect("/alpha/iteration-8/start-a-claim/proof-of-birth")

} 
 
else {
  response.redirect("/alpha/iteration-8/start-a-claim/MATB1-b")
}
})



router.post('/i8-baby-born-pregnancy-proof', function(request, response) {

  var babyBornPregnancyProofAnswer = request.session.data['baby-born-pregnancy-proof']
  if (babyBornPregnancyProofAnswer == "matb1"){
      response.redirect("/alpha/iteration-8/start-a-claim/MATB1-a")

  } else if (babyBornPregnancyProofAnswer == "other"){
    response.redirect("/alpha/iteration-8/start-a-claim/baby-birth-pregnancy-proof")

} 
 
else {
  response.redirect("/alpha/iteration-8/start-a-claim/baby-T2-summary")
}
})



router.post('/i8-sick-reason', function(request, response) {

  var i8sickReasonAnswer = request.session.data['i8sickReason']
  if (i8sickReasonAnswer == "SSP"){
      response.redirect("/alpha/iteration-8/start-a-claim/sick-end")

  } else if (i8sickReasonAnswer == "ESA"){
    response.redirect("/alpha/iteration-8/start-a-claim/sick-start")

} 


else {
  response.redirect("/alpha/iteration-8/start-a-claim/pregnancy-sick")
}
})


router.post('/i8-benefit-check', function(request, response) {

  var i8benefitCheckAnswer = request.session.data['i8benefitCheck']
  if (i8benefitCheckAnswer == "UC"){
      response.redirect("/alpha/iteration-8/start-a-claim/declaration-UC")

  } else if (i8benefitCheckAnswer == "none"){
    response.redirect("/alpha/iteration-8/start-a-claim/OneLogin")

} 

else {
  response.redirect("/alpha/iteration-8/start-a-claim/declaration-other")
}
})

router.post('/confirm-employment-answer-i4', function(request, response) {

  var confirmEmploymentAnswer = request.session.data['confirmEmployment']
  if (confirmEmploymentAnswer == "yes"){
      response.redirect("/alpha/iteration-8/start-a-claim/employer-additional-name")
  } else {
      response.redirect("/alpha/iteration-8/start-a-claim/earnings-history")
  }
})



}
