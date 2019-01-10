import Request from '../services/index';

class Repo {
  private request: Request;
  private key: string;

  constructor(key: string, request: Request){
    this.key = key;
    this.request = request;
  }

  // 获取文档仓库的目录树
  toc(){
    return this.request.toc(this.key);
  }

  // 获取文档列表或者某篇文档
  doc(key: string = ''){
    return this.request.doc(this.key, key);
  }

  // 获取这个文档仓库的信息
  detail(){
    return this.request.repo(this.key);
  }

}

export default Repo;