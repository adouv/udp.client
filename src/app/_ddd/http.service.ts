import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * 
 */
@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  /**
     * post
     *
     * @param {string} url
     * @param {*} [params]
     * @param {*} [options]
     */
  post(url: string, params?: any, options?: any): Observable<any> {

    if (options) {
      options.params = params;
    }

    return this.httpClient.post(url, {}, options);
  }
  promistPost(url: string, params?: any, options?: any): Promise<any> {
    if (options) {
      options.params = params;
    }

    return new Promise((resolve, reject) => {
      this.httpClient.post(url, {}, options).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
  /**
   * get
   *
   * @param {string} url
   * @param {*} [params]
   * @param {*} [options]
   */
  get(url: string, params?: any, options?: any): Observable<any> {

    if (options) {
      options.params = params;
      options.responseType = 'json';
    }

    console.log("options", options);

    return this.httpClient.get(url, options);
  }
  /**
   * delete
   *
   * @param {string} url
   * @param {*} [params]
   * @param {*} [options]
   */
  delete(url: string, params?: any, options?: any): Observable<any> {

    if (options) {
      options.params = params;
    }

    console.log(options);

    return this.httpClient.delete(url, options);
  }
  /**
   * put
   *
   * @param {string} url
   * @param {*} [params]
   * @param {*} [options]
   */
  put(url: string, params?: any, options?: any): Observable<any> {

    if (options) {
      options.params = params;
    }

    console.log(options);

    return this.httpClient.put(url, {}, options);
  }
  /**
   * patch
   *
   * @param {string} url
   * @param {*} [params]
   * @param {*} [options]
   */
  patch(url: string, params?: any, options?: any): Observable<any> {

    if (options) {
      options.params = params;
    }

    console.log(options);

    return this.httpClient.patch(url, {}, options);
  }
}
