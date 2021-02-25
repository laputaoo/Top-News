import { axiosPost } from '../libs/http'
import { API } from '../config/index'


function getNewsList(type) {
  return new Promise((resolve, reject)=> {
    axiosPost({
      url: API.GET_NEWS_LIST,
      data: {field:type},
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export {
  getNewsList
}
