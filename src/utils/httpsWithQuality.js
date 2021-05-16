const httpsWithQuality = (src, quality) => {
  let res = 'https:' + src.split(':')[1];
  return `${res.split('=')[0]}=s${quality}`;
};
export default httpsWithQuality;
