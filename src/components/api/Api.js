import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const Api = async value => {
  console.log(value);
  // const fetchCard = fetch(`https://pixabay.com/api/?key=34368263-756a5eb3a3e360b335b61bac8`).then(resp=>resp.json()).then(data=>{return data})

  const data = axios(
    `?key=34368263-756a5eb3a3e360b335b61bac8&q={value}&per_page=12&page=1`
  );
  return data;
};
export default Api;
// q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
