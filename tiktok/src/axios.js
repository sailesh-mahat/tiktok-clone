import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-mernback.herokuapp.com/",
});

export default instance;