const bufferutil = require("bufferutil");

const handler = async function (event, context) {
  console.log("Hello world");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

export { handler };
