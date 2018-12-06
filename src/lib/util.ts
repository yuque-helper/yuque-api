export const formatKey = (key:string) => {
  if(key.startsWith('/')){
    let chars = key.split('');
    chars.unshift();
    return chars.join('');
  }

  return key;
}