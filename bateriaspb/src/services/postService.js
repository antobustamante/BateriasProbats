function getPosts() {
    return new Promise((resolve, reject) => {
      fetch(`http://my-json-server.typicode.com/antobustamante/mockjson/products`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  
  function getPostById(idPost) {
    return new Promise((resolve, reject) => {
      fetch(`http://my-json-server.typicode.com/antobustamante/mockjson/products/${idPost}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  
  module.exports = {
    getPostById,
    getPosts,
  }