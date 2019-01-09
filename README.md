# yuque-api

nodejs yuque api

> 语雀api文档: https://www.yuque.com/yuque/developer/doc

## Quick Start

```js
  const Yuque = require('yuque-api');

  const yuque = new Yuque('your_yuque_token');

  // hello
  yuque.hello().then(console.log); // -> {data: { message: 'Hello yuque-helper' }}

  // 获取某个仓库的信息
  const repo = yuque.repo('yuque/developer');
  const detail = await repo.detail();

  // 获取某个仓库下的所有文档
  const docs = await repo.doc();

  // 获取某个仓库下的目录
  const toc = await repo.toc();

  // 获取某篇文档的信息
  const doc = await repo.doc(docs[0].slug);
```



开发中...


开发规划:

> 按照权重排序

#### 文档查询：

- [x] 支持某个仓库下的文档列表查询
- [x] 获取单篇文档的具体信息
- [ ] 新增/更新/删除某篇文档

#### 仓库:

- [x] 获取一个仓库的详情
- [x] 获取一个仓库的目录结构
- [ ] 其他仓库操作

### 其他实体
- [ ] 其他实体的其他操作

