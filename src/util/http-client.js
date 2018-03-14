import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = window.location.protocol+'//'+window.location.hostname+'/1ajaxPHPTest/';   //配置接口地址

export default fetch = function(url, params){
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(response => {
          var res = response.data;
          if(res.code == 0){
            resolve(response.data);
          }else{
            reject(response.data.tips);
          }
      })
      .catch(err => {
        //console.log(err);
        reject(err)
      });
  })

}
