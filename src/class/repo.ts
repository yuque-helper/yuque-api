import {RepoOption} from '../interface';

class Repo {
  readonly token: string;
  readonly url?: string;
  readonly key: string;

  constructor(token: string, option: RepoOption){
    this.token = token;
    this.url = option.url;
    this.key = option.key;
  }

  toc(){

  }

}

export default Repo;