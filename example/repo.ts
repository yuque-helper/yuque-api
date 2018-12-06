import Yuque from '../src/index';

const yuque = new Yuque('your-token');

// get repo

// 获取仓库详情
const repoDetail = yuque.repo('some-doc').detail();

// 获取仓库目录结构
const repoToc = yuque.repo('some-doc').toc();

// 获取仓库文档列表
const repoDocs = yuque.repo('some-doc').docs();

