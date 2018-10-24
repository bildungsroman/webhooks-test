exports.handler = async (req, ctx) => {
  console.log(message);

  // detect change in react-frontend repo master

  // trigger react-webhook-test/src/deployFrontEnd/index.js to run

  // how? deploy script? can it be done though API?


  console.log(`Got event ${req.headers['X-GitHub-Event']}`);
  return {
      statusCode: 200,
      body: ""
  }
}
