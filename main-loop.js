import './style.css'

// const listOf Photos = [
//     {
//       "id": "117",
//       "author": "Daniel Ebersole",
//       "width": 1544,
//       "height": 1024,
//       "url": "https://unsplash.com/photos/Q14J2k8VE3U",
//       "download_url": "https://picsum.photos/id/117/1544/1024"
//     },
//     {
//       "id": "118",
//       "author": "Rick Waalders",
//       "width": 1500,
//       "height": 1000,
//       "url": "https://unsplash.com/photos/d-Cr8MEW5Uc",
//       "download_url": "https://picsum.photos/id/118/1500/1000"
//     },
//     {
//       "id": "119",
//       "author": "Nadir Balcikli",
//       "width": 3264,
//       "height": 2176,
//       "url": "https://unsplash.com/photos/wE9nUW7tMmk",
//       "download_url": "https://picsum.photos/id/119/3264/2176"
//     }
// ]

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Julius!</h1>
//   <img src="https://picsum.photos/400/400
//   " alt="random image from API"/>
//   <br>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

// for (let i = 0; i < listOfPhotos.length; i++) {
//   console.log(i,listOfPhotos[i].author, listOfPhotos[i].id);
// }

fetch("https://picsum.photos/v2/list?page=2&limit=100")
  .then((response) => response.json())
  .then((listOfPhotos) => {
    for (let i = 0; i < listOfPhotos.length; i++) {
      console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
      document.querySelector(
        "#app"
      ).innerHTML += `<img src="${listOfPhotos[i].download_url}" alt="Random image" />`;
    }
  });
