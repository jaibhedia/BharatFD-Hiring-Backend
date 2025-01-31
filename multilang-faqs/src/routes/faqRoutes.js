const express = require('express');
const router = express.Router();
const { getFAQs, createFAQ } = require('../controllers/faqController'); // Ensure both are imported

router.get('/', getFAQs);  // Ensure getFAQs is defined
router.post('/', createFAQ);

module.exports = router;
