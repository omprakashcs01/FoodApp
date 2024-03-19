import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0VDGS8CXHUJH-TINwHNWvXsxsbnucwSwr8ahxiZEtrTtd9mXuTCjrt8CH2KvrGioBqbRTL9GAXqVGVRxFjGIoS1NyWSflo6iZt793H4PtgU0yVwwmA5R6g5stEYaYnYx' 
    }
});

