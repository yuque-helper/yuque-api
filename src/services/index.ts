import * as request from 'superagent';

class Request {
  readonly url:string;
  readonly token: string;
  readonly request: any;

  constructor(url: string, token: string){
    this.url = url;
    this.token = token;
    this.request = request;
    const self = this;

    const OrigRequest = this.request.Request;

    this.request.Request = function RequestWithPrefix (method:string, url:string) {
      const req = new OrigRequest(method, self.url + '/api/v2' + url).set({
        'User-Agent': 'app-name',
        'X-Auth-Token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }).then((d:any) => d.body);

      return req;
    }    
  }

  /**
   * 
   * @param key namespace 或者是 id
   */
  async toc(key: string){
    return this.request.get(`/repos/${key}/toc`);
  }

  /**
   * 
   * @param key slug 或者是 id
   */
  async doc(reposKey:string, docKey: string){
    return this.request(`/repos/${reposKey}/docs/${docKey}`);
  }
};

export default Request;
