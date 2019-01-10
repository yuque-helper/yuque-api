import 'jest';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import Yuque from '../src/index';

const getToken = () => {
  const homedir = os.homedir();
  try{
    const config = JSON.parse(fs.readFileSync(path.join(homedir, '.yuque2book.json')).toString());
    return config.token || process.env.TOKEN;
  } catch(e){
    console.log(e);
    throw Error('get token failed');
  }

}

const token = getToken();


if(!token){
  console.error('need yuque token');
  process.exit(1);
}

const yuque = new Yuque(token || '');

test('hello', async () => {
  const hello = await yuque.hello();
  expect(hello.data).toHaveProperty('message');
});

test("should get detail 获取文档信息", async () => {
  const detail = await yuque.repo('yuque/developer').detail();
  expect(detail).toHaveProperty('abilities');
  expect(detail).toHaveProperty('data');
});

test("should get toc 获取目录树", async () => {
  const toc = await yuque.repo('yuque/developer').toc();
  expect(toc).toHaveProperty('data');
  expect(typeof toc.data.length).toBe('number');
});

test("should get doc detail 获取某篇文档信息", async () => {
  const doc = await yuque.repo('yuque/developer').doc();
  expect(typeof doc.data.length).toBe('number');
  const firstDocSlug = doc.data[0].slug;
  const firstDoc = await yuque.repo('yuque/developer').doc(firstDocSlug);
  expect(firstDoc).toHaveProperty('abilities');
  expect(firstDoc).toHaveProperty('data');
});

test("should get self info 获取用户自己的信息", async () => {
  const user = await yuque.self();
  expect(user).toHaveProperty('data');
  expect(user.data).toHaveProperty('id');
  expect(user.data).toHaveProperty('type');
});

test("should get somebody's info 获取某个用户的信息", async ()=> {
    // TODO: 测试异常的情况
    const user = await yuque.user.user('yangli');
    expect(user.data.login).toEqual('yangli');
});

test("should get self doc 获取自己的文档", async () => {
    const docs = await yuque.user.docs();
    expect(docs).toHaveProperty('data');
    expect(typeof docs.data.length).toBe('number');
    expect(Array.isArray(docs.data)).toEqual(true);
});

// test("should return self recent updated 获取自己最近更新的文档/仓库", async () => {
//   // FIXME: 通不过测试
//   await yuque.user.recentUpdated('book');
// });

