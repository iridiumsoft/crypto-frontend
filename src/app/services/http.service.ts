import {environment} from '../../environments/environment'
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {

    url = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    get (method: string) {
        return this.http.get(this.url + method)
    }

    post(method: string, data) {
        console.error(this.url + method);
        return this.http.post(this.url + method, data)
    }

    put(method: string, data) {
        return this.http.put(this.url + method, data)
    }

    delete(method, id) {
        return this.http.delete(this.url + method + '/' + id)
    }
}
