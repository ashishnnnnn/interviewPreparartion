var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}
