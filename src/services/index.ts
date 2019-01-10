// import * as request from 'superagent';
import axios from 'axios';


class Request {
  readonly url:string;
  readonly token: string;
  readonly headers: any;
  readonly parser: (d: any) => any;
  readonly client: any;

  constructor(url: string, token: string){
    this.url = url + '/api/v2';
    this.token = token;
    this.headers = {
      'User-Agent': 'app-name',
      'X-Auth-Token': token,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    this.client = {};

    ['get', 'post', 'delete', 'put'].forEach((method) => {
      this.client[method] = (url: string, options: any) => axios[method](`${this.url}${url}`, {headers: this.headers, ...options}).then((d:any) => d.data);
    });
  }

  /**
   * 
   * @param key namespace 或者是 id
   */
  async toc(key: string){
    return this.client.get(`/repos/${key}/toc`);
  }

  /**
   * 
   * @param key slug 或者是 id
   */
  async doc(reposKey:string, docKey: string = ''){
    return this.client.get(`/repos/${reposKey}/docs/${docKey}`);
  }

  async repo(key: string){
    return this.client.get(`/repos/${key}`);
  }

  async hello(){
    return this.client.get('/hello');
  }

  async user(key: string){
    return this.client.get(`/users/${key}`);
  }

  async self(){
    return this.client.get('/user');
  }

  async userDocs(query?: string, offset?: number){
    return this.client.get('/user/docs', {data: {query, offset}});
  }

  async recentUpdated(type?: string, offset?: number){
    return this.client.get('/user/recent-updated', {data: {type, offset}});
  }
};

export default Request;
