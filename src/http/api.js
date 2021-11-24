import axios from '../http/request';
// 请求示例
// get
const mokeGet = (data) => {
  return axios({
    url: '/getApi',
    method: 'get',
    data,
    config: {
      headers: {
        'Request-Type': 'mock',
      },
      timeout: 10000,
    },
  });
};

// post
const getGoods = (data) => {
  return axios({
    url: '/post/goods',
    method: 'post',
    data,
    config: {
      headers: {
        'Request-Type': 'mock',
      },
      timeout: 10000,
    },
  });
};

export {
  getGoods,
  mokeGet,
};
