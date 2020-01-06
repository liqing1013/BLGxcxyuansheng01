// 封装GET
wepy.get = function(url, data = {}) {
    return wepy.request({
      method: 'GET',
      url: baseURL+url,
      data
    })
  }
// 封装POST
wepy.post = function(url, data = {}) {
    return wepy.request({
      method: 'POST',
      url: baseURL+url,
      data
    })
  }

// 提取baseURL
const baseURL = 'https://uinav.com/api/public/v1'