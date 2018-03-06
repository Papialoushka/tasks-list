const express = require( 'express' );
const server = express();
const path = require('path');
const port = (process.env.PORT || '3000');

const html = ({ body, title }) => `
<!DOCTYPE html>
<html lang='en'>
<head>
<title>${title}</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width" />
</head>
<body id="root">
${body}
</body>
</html>
`;

server.get( '/', ( req, res ) => {
  const body = 'Hello, world';
  const title = 'Tasks List App';

  res.send('Hello, world!')
    // html({
    //   body,
    //   title
});

server.listen(port, () => console.log('Example app listening on port 3000!'));
