import {DEFAULT_YUQUE_URL} from './consts';
import {YuqueOption} from './interface';
import Repo from './class/repo';

const urlReg = /^http[s]?:\/\/.+\.com$/;

class Yuque{
  readonly token: string;
  readonly url: string;

  constructor(token: string, option: YuqueOption = {}){
    const url = option.url || DEFAULT_YUQUE_URL;
    if(!urlReg.test(url)){
      throw Error('输入的语雀地址不正确');
    }

    this.url = url;
    this.token = token;
  }

  repo(key: string){
    return new Repo(this.token, {
      url: this.url,
      key: key
    })
  }
}

export default Yuque;
