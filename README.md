# Client of [rest](https://github.com/nguyentrongquocuet/rest-calculator)/[soap](https://github.com/nguyentrongquocuet/soap-calculator) services
# I cant enable CORS on my soap service, so i created a proxy at `localhost:1874` that forwards every request it takes to the `SOAP Service`

# Edit `.env` to modify the url of `REST Service`.

# If you want to edit the url of `SOAP Service`, please go to `proxy/index.js`, change the port of proxy server and `SOAP Service`, after that, update the `VITE_SOAP_URL` to the Proxy's Origin + old path

# How to run
* `npm install`
* `npm run proxy`
* `npm run dev`
