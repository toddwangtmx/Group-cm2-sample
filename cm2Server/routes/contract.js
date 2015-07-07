var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send({
    contractName: 'KMC-BLS-triparty-contract',
    type: 'Tri-party',
    release: 'Release 2',
    environment: 'QA',
    holder: 'holder 2',
    approvers: [
      {
        id: '0001',
        groupName: 'KMC-approver'
      },
      {
        id: '0002',
        groupName: 'BLS-approver'
      }
    ],
    authors: [
      {
        id: '0003',
        groupName: 'KMC-author'
      },
      {
        id: '0004',
        groupName: 'BLS-author'
      }
    ],
    comment: 'Description of KMC-BLS Tri-party contract.'
  });
});

router.post('/', function(req, res, next) {
  if(!req.body.contractInfo) {
    res.status(400).send({
      error: 'Missing contract info!'
    });
  }
  else {
    res.send({
      status: 'success'
    });
  }
});

module.exports = router;
