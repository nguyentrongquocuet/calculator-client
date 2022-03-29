# Client of [rest](https://github.com/nguyentrongquocuet/rest-calculator)/[soap](https://github.com/nguyentrongquocuet/soap-calculator) services
# I cant enable CORS on my soap service, so i created a proxy by default at `localhost:1874` that forwards every request it takes to the `SOAP Service`

# Edit `.env` to modify the url of `REST Service` and `SOAP Service`, note that 3 URLS must be unique and available on the machine

# If you want to edit the url of `SOAP Service`

# How to run
* `npm install`
* `npm run proxy`
* `npm run dev`
