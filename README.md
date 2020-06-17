<b> Enable REST API test </b>

<b> API: </b>

https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

<b> Acceptance Criteria: </b>

1. Name = "Carbon credits"

2. CanRelist = true

3. The Promotions element with Name = "Gallery" has a Description that contains the text "2x larger image" 

<b> Instructions: </b>

 The test needs to be written using a programming language of your choice (not a tool like SoapUI)

 Please submit your tests to us via a source control of your choice in a format that lets us execute and review the code

 Please note that your tests should validate all three acceptance criteria

<b> Framework Used:</b>
Axios 

<b> Assertion Library Used: </b>
Chai

<b> Programming Language: </b>
Javascript
 
<b> Prerequisite: </b>
1. Install Node.js https://nodejs.org/en/download/
2. Download code repository https://github.com/PushparajanBalasubramanian/Enable.git and extract in your local folder
3. Open Command Prompt
4. cd to Enable-master\codeceptjs_api_testing\codeceptjs_api_testing
5. npm i mochawesome
6. npm install 


<b> Steps to run the test: </b>
1. In the same command prompt, type the following command to run the test 
<br> npm test </br>

<b> Test Result </b>
1. Test output in html format can be found at folder: mochawesome-report/mochawesome.html
