const fetch = require('C:\\Users\\Snailz\\AppData\\Roaming\\npm\\node_modules\\node-fetch');
void async function() {
  try {
    for (;;) {
      const responseArr = [];
      for (let i = 0; i < 100; i++) {
        responseArr.push(fetch('https://api.punkapi.com/v2/beers/random'));
      }
      (await Promise.all(responseArr)).map(response => {
        if (!response.ok) throw response;
        console.log(response.headers.get('x-ratelimit-remaining'));
      });
    }
  } catch(response) {
    console.log('headers: ', response.headers);
    console.log('ok: ', response.ok);
    console.log('status: ', response.status);
    console.log('statusText:', response.statusText);
  }
}()