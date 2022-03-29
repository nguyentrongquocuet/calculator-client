# Client of [rest](https://github.com/nguyentrongquocuet/rest-calculator)/[soap](https://github.com/nguyentrongquocuet/soap-calculator) services
# I cant enable CORS on my soap service, so i created a proxy at `localhost:1874` that forwards every request it takes to the `Soap Service`

# Edit `views/index.tsx` to modify the url of `REST Service`.

# If you want to edit the url of `SOAP Service`, please go to `proxy/index.js`.

# How to run
* `npm install`
* `npm run proxy`
* `npm run dev`
