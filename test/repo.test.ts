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
