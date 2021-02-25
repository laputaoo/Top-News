import { getNewsList } from './request'

export default async (type, pageCount = 10)=> {
  const data = await getNewsList(type)
  const listData = data.result.data,
        len = listData.length
  
  let pageData = [],
      index = 0
  
  while(index < len) {
    pageData.push(listData.slice(index, index += pageCount))
  }

  return {pageData}
}