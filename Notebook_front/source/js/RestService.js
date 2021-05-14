import axios from "axios";

const RestService = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 1000,
});

export default RestService;