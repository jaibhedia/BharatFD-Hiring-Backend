const FAQ = require('../models/faqModel'); // Ensure you have a model for FAQs
const translateText = require('../utils/translate');

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const translations = new Map();
        translations.set('en', question);

        // Translate question and answer to Hindi & Bengali
        const question_hi = await translateText(question, 'hi');
        const question_bn = await translateText(question, 'bn');
        const answer_hi = await translateText(answer, 'hi');
        const answer_bn = await translateText(answer, 'bn');

        translations.set('hi', question_hi);
        translations.set('bn', question_bn);

        const faq = new FAQ({ question, answer, translations });
        await faq.save();
        res.status(201).json(faq);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
