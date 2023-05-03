import axios from 'axios';

import ApiUrl from './ApiUrl';

// TODO: CORS 에러 해결을 위해 instance 사용을 중단함. 추후 결정하기
// const fetchRelatedKeywords = async (keyword: string) => {
//   const { data } = await instance.get(`${ApiUrl.relatedKeywords}${keyword}`, {
//     headers: { 'Cache-Control': 'no-cache' },
//   });
//   console.info('calling api');
//   return data;
// };

const fetchRelatedKeywords = async (keyword: string) => {
  const { data } = await axios.get(`${ApiUrl.relatedKeywords}${keyword}`);

  return data;
};

export default fetchRelatedKeywords;
