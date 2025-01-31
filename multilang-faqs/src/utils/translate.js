
const axios = require('axios');

const translateText = async (text, targetLang) => {
    try {
        const API_KEY = "YOUR_KEY";

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
        return text; 
    }
};

module.exports = translateText;


//ENV APPROACH
// const axios = require('axios');
// require('dotenv').config(); 

// const translateText = async (text, targetLang) => {
//     try {
//         const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

//         if (!API_KEY) throw new Error("Google Translate API Key is missing!");

//         const url = `https://translation.googleapis.com/language/translate/v2`;
//         const response = await axios.post(url, null, {
//             params: {
//                 q: text,
//                 target: targetLang,
//                 key: API_KEY,
//             }
//         });

//         return response.data.data.translations[0].translatedText;
//     } catch (error) {
//         console.error("❌ Translation Error:", error.response?.data || error.message);
//         console.error("🛠 Debugging Details:", {
//             status: error.response?.status,
//             headers: error.response?.headers,
//             config: error.config,
//         });
//         return text; 
//     }
// };

// module.exports = translateText;
