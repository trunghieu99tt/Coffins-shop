import { API_URL } from "../variables";
import Axios from "axios";

const axios = Axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axios;
