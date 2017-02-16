
/************************************************************************
*********
*  WEB
222 
–
Assig
nment
02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  
No
part of this 
assignment has been copied manually or elect
ronically from any other source
*  (including web sites) or 
distributed to other students
.
* 
*  Name: ___Zixian Ou___
_
_______ Student ID: __125421164_
__
_______ Date: ___2017.02.15____
*
********************************************************************************/ 


/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */




var CustomerDB = {
        customers:[],
        addresses:[],
        stores:[],
        insertData: function(input){
           input.map((content)=>{
                  
             switch(content.type){
                 case "store":              
                    this.addStore(content.data);
                    break;
             
                 case "customer":
                    this.addCustomer(content.data);
                    break;
             
                 case "address":
                    this.addAddress(content.data);
                    break;
              }
          })
        },
        addStore:function(storeObj){
           this.stores.push(storeObj);
                    
        },
        addCustomer:function(customerObj){
           customerObj.add_date = new Date();
           this.customers.push(customerObj);
                        
        }, 
        addAddress:function(addressObj){
           this.addresses.push(addressObj);
                        
        },
        outputCustomerById:function(customer_id){
            this.customers.map((customerObj)=>{
                if(customerObj.customer_id == customer_id){
                    console.log("Customer "+ customerObj.customer_id+": "+customerObj.first_name + " " +customerObj.last_name + " ( " +customerObj.email + ")");
                    var addressObj = this.getAddressById(customerObj.address_id);
                        if(addressObj){
                              console.log("Home Address: "+ addressObj.address +", "+addressObj.province + addressObj.postal_code);
                              console.log("Joined: " + customerObj.add_date);
                              console.log("");
                         }
                    
                }     
            });
              
        },
       outputAllCustomers:function(){
            this.customers.map((customerObj)=>{            
                console.log("Customer "+ customerObj.customer_id+": "+customerObj.first_name + " " +customerObj.last_name + " (" +customerObj.email + ")");
                var addressObj = this.getAddressById(customerObj.address_id);
                        if(addressObj){
                              console.log("Home Address: "+ addressObj.address + " " + addressObj.city + ", " +addressObj.province + addressObj.postal_code);
                              console.log("Joined: " + customerObj.add_date);
                              console.log("");
                         }
            });
       },
       outputCustomersByStore:function(store_id){
            this.customers.map((customerObj)=>{
                if(customerObj.store_id == store_id){
                    console.log("Customer "+ customerObj.customer_id+": "+customerObj.first_name + " " +customerObj.last_name + " ( " +customerObj.email + ")");
                    var addressObj = this.getAddressById(customerObj.address_id);
                        if(addressObj){
                           console.log("Home Address: "+ addressObj.address +" "+ addressObj.city +", "+addressObj.province + addressObj.postal_code);
                           console.log("Joined: " + customerObj.add_date);
                           console.log("");
                        }
                 }
                             
            });
            
        },
       removeCustomerById:function(customer_id){
           this.customers.map((customerObj,index)=>{
                if(customerObj.customer_id == customer_id){        
                    this.removeAddressById(customerObj.address_id);
                    this.customers.splice(index,1);
                }     
           });
       },
       getAddressById:function(address_id){          
           var returnObj;
           this.addresses.map((addressObj)=>{
               if(address_id == addressObj.address_id){
                      
                      returnObj = addressObj;
                }
            })
           return returnObj;
       },
       outputAllAddresses:function(){
           console.log("All Addresses")
           console.log("")
           this.addresses.map((address)=>{
             console.log("Address " + address.address_id +
                        ": " + address.address +" "+ address.city +
                         "," + address.province + "." +
                        address.postal_code)
             console.log("")
           });
       },
       removeAddressById:function(address_id){
           var num = 0;
           var key;
           
           this.addresses.map((addressObj,index)=>{
               
                if(addressObj.address_id == address_id){           
                     this.customers.map((customerObj)=>{
      
                        if(address_id == customerObj.address_id){
                           ++num;          
                           key = index;
                        }
                    }); 
                }                 
           });         
          if(num == 1){
                this.addresses.splice(key,1);             
          }
       },
       getStoreById:function(store_id){          
           var returnObj;
           this.stores.map((storeObj)=>{
               if(store_id == storeObj.store_id){
                      
                      returnObj = storeObj;
                }
            })
           return returnObj;
       },
       outputAllStores:function(){
           console.log("All Stores")
           console.log("")
           this.stores.map((store)=>{
               console.log("Store " + store.store_id + ": " +
                          store.name)
               var addressObj = this.getAddressById(store.address_id);
               console.log("Location: " + addressObj.address +" "+addressObj.city +
                         "," + addressObj.province + "." +
                        addressObj.postal_code)
               console.log("")
           });
       },
    
    

}


/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 


// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 






