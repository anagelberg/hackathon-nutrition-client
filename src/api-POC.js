// import axios from 'axios';
const axios = require('axios');

console.log('hello?')

const options = {
    method: 'GET',
    url: 'https://food-nutrition-information.p.rapidapi.com/foods/search',
    params: {
        query: 'cheese',
        pageSize: '1',
        pageNumber: '1',
        brandOwner: 'Kar Nut Products Company'
    },
    headers: {
        'X-RapidAPI-Key': '5f1c1e732dmsh075aa9b3cdc7c44p19f1fcjsne4f8d2332503',
        'X-RapidAPI-Host': 'food-nutrition-information.p.rapidapi.com'
    }
};

axios.request(options).then((response) => {
    console.log(response.data);
})


// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }