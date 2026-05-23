// for loop

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log(`${i} is best number`);
  }

  //   console.log(i);
}

// nested loops

for (let i = 0; i < 10; i++) {
  //   console.log(`Outer loop: ${i}`);

  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop: ${j}, Outer loop: ${i}`);
    // console.log(i + "*" + j + "=" + i * j); // printing tables
  }
}

// break and continue Concepts

//break : get out from the loop after hitting thr value by stopping the further iterations
for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected ${i}, now stop the further itertaions`);
    break; // getting out of the loop, loop stops pring after value 5
  }
  console.log(`Value of i is : ${i}`);
}

//Continue concepts: skip the value by continuing the iterations further
for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected ${i}, continue further iterations.`);
    continue; // avoid printing the value 5 and continue the loop for all iterations
  }
  console.log(`Value of i is : ${i}`);
}
