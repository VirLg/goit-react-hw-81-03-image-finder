const Api=()=>{
const fetchCard = fetch(`https://pixabay.com/api/?key=8327559-3ff53f0c8bf420d9f1f4acaef`).then(resp=>resp.json())
return fetchCard
}
export default Api