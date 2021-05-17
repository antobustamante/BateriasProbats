import db from '../firebase';

const itemCollection = db.collection('data');

export function getPosts(){
  return itemCollection.get()
  .then(snapshot => {
    return snapshot.docs.map(doc=>doc.data())
  })
}

export function getPostById(idPost) {
  const itemById = itemCollection.where("id", "==", parseInt(idPost));
  return itemById.get()
    .then(snapshot => {
      return snapshot.docs.map(doc => doc.data())
    })
  }



// function getPosts() {
//     return new Promise((resolve, reject) => {
//       fetch(`http://my-json-server.typicode.com/antobustamante/mockjson/products`)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     })
//   }
  
//   function getPostById(idPost) {
//     return new Promise((resolve, reject) => {
//       fetch(`http://my-json-server.typicode.com/antobustamante/mockjson/products/${idPost}`)
//         .then(res => res.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     })
//   }
  
//   module.exports = {
//     getPostById,
//     getPosts,
//   }