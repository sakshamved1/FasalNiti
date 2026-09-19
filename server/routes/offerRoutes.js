const express = require('express');
const router = express.Router();
const { getOffers, createOffer, counterOffer, acceptOffer, getOrders } = require('../controllers/offerController');

router.get('/', getOffers);
router.get('/listing/:listingId', getOffers);
router.post('/', createOffer);
router.post('/:id/counter', counterOffer);
router.post('/:id/accept', acceptOffer);
router.get('/orders/all', getOrders);


module.exports = router;
