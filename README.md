# Nodejs-RestFulAPI
RESTful API using Nodejs and express js and mongoDB


**STEPS**:

1# npm install

2# Create a database named test on mongoDB

3# Create a mongoDB document names **standups** with the below fields

    memberName: String
    project: String
    workYesterday: String
    workToday: String
    impediment: String
    createdOn: {type:Date, default: Date.now}
    
4# Type **gulp**  on the terminal to start the server and listen at port 8080

5# Use tool like Postman and use the below URL's

GET: http://localhost:8080/api/Standups

POST: http://localhost:8080/api/standups/

PUT: http://localhost:8080/api/Standups/58d05d91895abe2f2013f9e1 
    
    sample body 
    
     {
      "memberName": "xxxxxxx",
      "workYesterday": "Yesterday1",
      "workToday": "Today1",
      "impediment": "Today2",
    }

PATCH: http://localhost:8080/api/Standups/58d05d91895abe2f2013f9e1

        sample body
        
        {      
          "impediment": "No Impediments",
        }
        
 DELETE: http://localhost:8080/api/Standups/58dce6e77229fc4a4c69ca96


