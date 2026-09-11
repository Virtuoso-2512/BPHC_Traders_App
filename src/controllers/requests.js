import axios from "axios";
const RequestPrefix = "https://bphc-traders-app-server.onrender.com/api/";
// const RequestPrefix = "http://localhost:5000/api/";

export const post = async(link, body) => {
        const data = await axios.post(RequestPrefix+link, body)
        .then(res => { return res.data })
        .catch(err => { return "" });
    
        return data;
    };
    
export const get = async(link) => {
        const data = await axios.get(RequestPrefix+link)
        .then(res => { return res.data })
        .catch(err => { return "" });
    
        return data;
    }