const axios = require("axios");
const chai = require("chai");
const assert = chai.assert; // Assert

//Test data
const Name = "Carbon credits";
var CanRelist = new Boolean(true);
var promotionsName = "Gallery";

Feature("Enable API Testing");

const instance = axios.create({
    baseURL: "https://api.tmsandbox.co.nz/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
    
});

Scenario("Enable API Validation", async () => {
    instance
        .get("/Categories/6327/Details.json?catalogue=false")
        
        .then(function(response) {
            assert(response.status === 200, "Status is not 200.");
            assert.isObject(response.data);

            const jsonData = response.data;
            
            console.log(jsonData);
            console.log(jsonData.Name);
            console.log(jsonData.CanRelist);
            console.log(jsonData.Promotions.length);

            //1st Test
            assert.equal(jsonData.Name, Name, "Name doesn't match Carbon Credits");

            
            //2nd Test
            assert.equal(jsonData.CanRelist, CanRelist, "CanRelist is not true");

            //3rd Test
            for(i=0; i<jsonData.Promotions.length; i++) 
            {
                

                if (jsonData.Promotions[i].Name === promotionsName)
                {
                    console.log(jsonData.Promotions[i].Name);
                    console.log(jsonData.Promotions[i].Description);
                    var pDesc = jsonData.Promotions[i].Description;
                    assert.match(pDesc, /2x larger image/g, "Pattern didn't match");
                }
            }
            
        });
});
