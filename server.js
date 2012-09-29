/* This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at http://mozilla.org/MPL/2.0/. */

const http = require('http');

const PERSONA_IDP = 'mockmyid.com';

http.createServer(function (req, res) {
  if (req.url.indexOf('/.well-known/browserid') !== -1) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{ "authority": "' + PERSONA_IDP + '" }');
  } else {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end('<html><body>delegat.es is part of <a href="https://github.com/mozilla/browserid">Persona</a> testing');
  }
}).listen(process.env['PORT'] || 3000, '127.0.0.1');