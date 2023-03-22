import axios from "axios";

const API_URL = "https://www.reddit.com/r/memes.json";

export const data = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("error:", error);
        return error.response;
    }
};
