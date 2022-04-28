console.log('MY_SECRET: ', process.env.MY_SECRET);
console.log('ALL ENVS: ', process.env);
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
(async function() {
  console.log('Waiting 500 seconds');
  await sleep(50000);
  console.log('Done waiting!')
})();
