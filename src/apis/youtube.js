import axios from "axios";

const KEY = "AIzaSyCOyTs4MyUIHc9KGVsurza-6jFzNN7PpDQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});