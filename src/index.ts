

// // setTimeout(
// //   () => printMessage("This message is displayed after a delay."),
// //   2000
// // );
// console.log("Fetching data from the API...");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log("Fetched data:", data.userId))


import axios from "axios"

const main = async () => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

    console.log("Fetched data:", response.data.userId)
    
    console.log(response.data)
}

main()

