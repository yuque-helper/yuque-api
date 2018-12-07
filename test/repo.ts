import Yuque from '../src/index';

const token = process.env.TOKEN;

if(!token){
  console.error('need yuque token');
  process.exit(1);
}

const yuque = new Yuque(token || '');

const getDetail = async () => {
  const detail = await yuque.repo('yuque/developer').detail();
  console.log('detail ===>', detail);
}

const getToc = async () => {
  const toc = await yuque.repo('yuque/developer').toc();

  console.log(toc);
  return toc;
}

const getDoc = async () => {
  const toc = await getToc();
  const first = toc.data[1];

  console.log(first.slug);

  const doc = await yuque.repo('yuque/developer').doc(first.slug);

  console.log(doc);
}


getDetail();
getDoc();