import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

    url = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    get (method) {
        return this.http.get(this.url + method)
    }

    post(method, data) {
        return this.http.post(this.url + method, data)
    }

    put(method, data) {
        return this.http.put(this.url + method, data)
    }

    delete(method, id) {
        return this.http.delete(this.url + method + '/' + id)
    }
}
