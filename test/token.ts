import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

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


export default token;
