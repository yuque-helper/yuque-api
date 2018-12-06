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
        'X-Auth-Token': token
      })
      return req;
    }    
  }

  async toc(key: string){
    return this.request.get(`/repos/${key}/toc`);
  }
};

export default Request;
