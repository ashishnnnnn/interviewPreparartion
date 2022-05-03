let count1 = 0;

const expensiveFn = () => {
  console.log("Expensive Function Called ", count1++, " times");
};

const throatling = (fn, delay) => {
  let flag = true;
  return () => {
    if (flag === true) {
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const throat_better_fn = throatling(expensiveFn, 1000);
