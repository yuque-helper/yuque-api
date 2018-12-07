import Request from '../services/index';

class Repo {
  readonly request: Request;
  readonly key: string;

  constructor(key: string, request: Request){
    this.key = key;
    this.request = request;
  }

  toc(){
    return this.request.toc(this.key);
  }

  doc(key: string){
    return this.request.doc(this.key, key);
  }

  detail(){
    return this.request.repo(this.key);
  }

}

export default Repo;