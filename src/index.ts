import {DEFAULT_YUQUE_URL} from './consts';

interface YuqueOption{
  url: string // 语雀的url
}

const urlReg = /^http[s]?:\/\/.+\.com$/;

class Yuque{
  readonly token: string;
  readonly url: string;

  constructor(token: string, option: YuqueOption){
    const url = option.url || DEFAULT_YUQUE_URL;
    if(!urlReg.test(url)){
      throw Error('输入的语雀地址不正确');
    }

    this.url = url;
    this.token = token;
  }

  repo(){
    
  }
}

export default Yuque;
