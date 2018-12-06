import Request from '../src/services/index';

const request = new Request('https://www.yuque.com', process.env.TOKEN || '');

request.toc('yuque/help').catch(e => {
  console.log(e);
});
