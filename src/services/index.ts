import * as request from 'superagent';

class Request {
  readonly url:string;
  readonly token: string;
  readonly request: any;
  readonly headers: any;
  readonly parser: (d: any) => any;

  constructor(url: string, token: string){
    this.url = url + '/api/v2';
    this.token = token;
    this.request = request;
    this.headers = {
      'User-Agent': 'app-name',
      'X-Auth-Token': token,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    this.parser = (d:any) => d.body;
  }

  /**
   * 
   * @param key namespace 或者是 id
   */
  async toc(key: string){
    return this.request.get(`${this.url}/repos/${key}/toc`).set(this.headers).then(this.parser);
  }

  /**
   * 
   * @param key slug 或者是 id
   */
  async doc(reposKey:string, docKey: string = ''){
    return this.request(`${this.url}/repos/${reposKey}/docs/${docKey}`).set(this.headers).then(this.parser);
  }

  async repo(key: string){
    return this.request.get(`${this.url}/repos/${key}`).set(this.headers).then(this.parser);
  }
};

export default Request;
