//'for in' loop

//objects
let obj = {
  userName: "Nikhil Kumar",
  age: 24,
  homeTown: "Bihar",
};

for (const key in obj) {
  //   console.log(key); //printing all keys of object
  //   console.log(obj[key]); // printing values
  //   console.log(`${key} : ${obj[key]}`);
}

//array
let arr = ["JS", "Python", "C++", "Java"];
for (const key in arr) {
  //   console.log(key); // print keys(index of arrays)
  console.log(arr[key]); //printing values
}

// map object is not iterable here
