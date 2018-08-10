import {environment} from '../../environments/environment'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";

@Injectable()
export class HttpService {

    url = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    get (method: string, params = {}) {
        return this.request('get', method, params);
    }

    post(method, data?) {
        return this.request('post', method, data);
    }

    put(method, data) {
        return this.request('put', method, data);
    }

    patch(method, data) {
        return this.request('patch', method, data);
    }

    delete(method) {
        return this.request('delete', method);
    }

    request(type: string, method: string, data = {}) {
        const options = HttpService.getOptions();
        let response;
        if (type === 'post' || type === 'put' || type === 'patch') {
            response = this.http[type](this.url + method, data, options)
        } else {
            let qs = '';
            if (Object.keys(data).length > 0) {
                const searchParams = new URLSearchParams();
                Object.keys(data).forEach(key => searchParams.append(key, data[key]));
                qs = '?' + searchParams.toString();
            }
            response = this.http[type](this.url + method + qs, options)
        }
        return response;
    }

    static getOptions() {
        const token = UserService.getToken();
        const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
        return {
            headers
        };
    }
}
