let data = {
    name: "sreenu",
    email: "sreenu140@gmail.com",
    gender: "male",
    status: "active"
};

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer ff17708457cc395701df2f8f24c1ab4ea1bfe772b4bca49ded34e3ec3e310987"
    },
    body: JSON.stringify(data)
};

fetch("https://gorest.co.in/public/v2/users", options)
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
})
.catch(function(error) {
    console.error("Error:", error);
});

//                                 -----PUT--------
// let options={
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer 38b847489977e28d159545eb500d01dadfa2744411081fddf9ea0a95e7864081"
//     },
//     body:JSON.stringify(data)
   
// };
// fetch("https://gorest.co.in/public-api/users/7923496",options)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     console.log(jsonData);
// });


// let options={
//     method:"DELETE",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer 38b847489977e28d159545eb500d01dadfa2744411081fddf9ea0a95e7864081"
//     },
//     body:JSON.stringify(data)
   
// };
// fetch("https://gorest.co.in/public-api/users/7923496",options)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     console.log(jsonData);
// });
// */
// // let options={
// //     method:"GET",
// //     headers:{
// //         "Content-Type":"application/json",
// //         Accept:"application/json",
// //         Authorization:"Bearer ff17708457cc395701df2f8f24c1ab4ea1bfe772b4bca49ded34e3ec3e310987"
// //     },
// //    body:JSON.stringify(data)
   
// // };
// // fetch("https://gorest.co.in/my-account/access-tokens",options)
// // .then(function(response){
// //     return response.json();
// // })
// // .then(function(jsonData){
// //     console.log(jsonData);
// // });