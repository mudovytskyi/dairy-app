// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
import axios from 'axios'

// Optionally the request above could also be done as
// axios.get(user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function getDataAction(url:string, params:{} = {}) {
  try {
    const response = await axios.get(url, params)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}