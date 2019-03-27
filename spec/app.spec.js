const http = require('http');

describe("A suite is just a function", function() {
  
    it("and so is a spec", function() {

      http.post('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(JSON.parse(data).explanation);
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });

      var a = true;
  
      expect(a).toBe(true);
    });
  });
  