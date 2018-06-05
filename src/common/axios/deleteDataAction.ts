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
export /* async */ function deleteDataAction(url:string, params:any) {
  url = url.replace(':id', params.id)
  console.log(url)
  return axios.delete(url, params)
    .then((response: any) => ({response}))
    .catch((error:any) => ({error}))

   
  // try {
  //   const response = await axios.post(url, params)
  //   console.log("Resp", response);
  // } catch (error) {
  //   console.error(error);
  // }
}