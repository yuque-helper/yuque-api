import * as request from 'superagent';

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
    this.parser = (d:any) => d.body;
    this.client = {};

    ['get', 'post', 'delete', 'put'].forEach(method => {
      this.client[method] = (url: string) => request(method, `${this.url}${url}`).set(this.headers).then(this.parser);
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
};

export default Request;
