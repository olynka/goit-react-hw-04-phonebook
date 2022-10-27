import axios from "axios";

export const fetchImage = async (page, searchQuery) => {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '29705426-bfa25e249bc10439228dcaa9b'
    const urlOptions = `image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
    
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${urlOptions}`);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    };














// import axios from 'axios';

// const perPage = 12;
// const imageType = 'photo';
// const orientation = 'horizontal';

// axios.defaults.baseURL = `https://pixabay.com/api/`;

// export const searchImage = async query => {
//   const response = await axios.get(
//     `?q=${query}&page=1&key=29705426-bfa25e249bc10439228dcaa9b&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`
//   );
//   return response.data;
// };