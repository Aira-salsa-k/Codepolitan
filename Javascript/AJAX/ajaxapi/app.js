// const req = new XMLHttpRequest();
// let data;
// req.onload = function(){
//     data = JSON.parse(this.responseText);
//     console.log(data);
// }
// req.onerror = function(){
//     console.log('Errorz');
// }

// req.open('GET','https://swapi.dev/api/people/1',true);
// myReq.setRequestHeader('Accept','application/json');
// req.send();

// fetch("https://swapi.dev/api/people/1")
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw Error("Could not fettch data for that recource");
// 		}
// 		return res.json();
// 	})

// 	.then((data) => {
// 		console.log("json 1", data);
// 		return fetch("https://swapi.dev/api/people/2");
// 	})

// 	.then((res) => {
//         console.log('request ke 2')
// 		if (!res.ok) {
// 			throw Error("Could not fettch data for that recource");
// 		}
// 		return res.json();
// 	})

//     .then((data) => {
//         console.log(data)
//     })
// 	.catch((err) => {
// 		console.log("error", err);
// 	});

/////////////////////////////////+ dengan asycncrous
// const loadPeople = async () => {

//     try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2= await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//     }catch (err){
//         //proses lainnya
//         console.log('error',err)
//     }

// }

// loadPeople();


///////////////+ versi axios
// axios.get("https://swapi.dev/api/peopledyda/2")
// .then((res) => {
//     console.log(res.data)
// })

// .catch((err) => { 

//     console.log(err)
//     alert(err.message)
// })

const getPeople = async(id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
    }
}