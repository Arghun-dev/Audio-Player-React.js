export const sleep = (time = 200) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
