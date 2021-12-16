// @ts-ignore
import axios from "axios";

export default class CarsService {

    getCarsList () {
        return this.init().get("/all");
    }

    init () {
        let headers = {
            Accept: "application/json",
        };

        return axios.create({
            baseURL: 'http://localhost:8080/cars',
            timeout: 31000,
            headers: headers,
        });
    }
}
