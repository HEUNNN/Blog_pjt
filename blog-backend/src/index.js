const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
//서버 포트 4000 번으로 열고, 서버에 접속하면 Hello World 텍스트를 반환하도록 설정
