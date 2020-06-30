import axios from "axios"
const BASE_URL="http://localhost:4000/api/books"
class BookService{
    static all(){
        return axios.get(BASE_URL);
    }
    static getByID(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
}
export default BookService;
