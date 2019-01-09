import Repo from './class/repo';
import Request from './services/index';
import {YuqueOption} from './interface';
import {DEFAULT_YUQUE_URL} from './consts';

const urlReg = /^http[s]?:\/\/.+\.com$/;

class Yuque{
  readonly token: string;
  readonly url: string;
  readonly request: Request;

  constructor(token: string, option: YuqueOption = {}){
    const url = option.url || DEFAULT_YUQUE_URL;
    if(!urlReg.test(url)){
      throw Error('输入的语雀地址不正确');
    }

    this.url = url;
    this.token = token;
    this.request = new Request(url, token);
  }

  repo(key: string){
    return new Repo(key, this.request);
  }

  hello(){
    return this.request.hello();
  }
  
}

export default Yuque;
