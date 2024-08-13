import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL)

const api = axios.create({
  
   baseURL : import.meta.env.VITE_BASE_URL,
   headers  : {
     "Content-Type" : "application/jason"
   },                
});


export default api