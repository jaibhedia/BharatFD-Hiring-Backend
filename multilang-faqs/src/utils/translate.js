const axios = require('axios');

const translateText = async (text, targetLang) => {
    try {
        const API_KEY = "AIzaSyC9jVJhBBhS4TqiA0zLP34nv3wpCiCh0ko"; // 🔥 Replace with your actual API key

        if (!API_KEY) throw new Error("Google Translate API Key is missing!");

        const url = `https://translation.googleapis.com/language/translate/v2`;
        const response = await axios.post(url, null, {
            params: {
                q: text,
                target: targetLang,
                key: API_KEY,
            }
        });

        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error("❌ Translation Error:", error.response?.data || error.message);
        console.error("🛠 Debugging Details:", {
            status: error.response?.status,
            headers: error.response?.headers,
            config: error.config,
        });
        return text; // Return original text if translation fails
    }
};

module.exports = translateText;
