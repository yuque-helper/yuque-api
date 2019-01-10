import Request from '../services/index';


class User{
  private request: Request;

  constructor(request: Request){
    this.request = request;
  }

  /**
   * 获取单个用户的信息
   * @param key 用户的id或者login
   */
  user(key: string){
    return this.request.user(key);
  }

  // 返回当前用户的个人信息
  self(){
    return this.request.self();
  }

  /**
   * 获取个人的文档
   * @param query 模糊搜索关键词
   * @param offset 分页
   */
  docs(query?: string, offset?: number){
    return this.request.userDocs(query, offset);
  }

  recentUpdated(type?: string, offset?: number){
    return this.request.recentUpdated(type, offset);
  }

}

export default User;