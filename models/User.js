
// {} object destructuring in JavaScript that allows you to extract specific properties (in this case, Schema and model) from the mongoose module and assign them to variables with the same names
const { Schema, model } = require("mongoose");


//schema name userSchema represents the structure of the database,relationships, and constraints.
const userSchema = new Schema(
    {
        //model name is User
        // represents the data and the behavior associated with it.
        //username,email,thoughts,friends are the field name 


        username:
        {
            // properties that can be used in a schema to define the characteristics of a field.
         type: String,
         required: true,
         unique: true,
         trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        thoughts: [{
           // _id: require('mongodb').ObjectId,
           _id: Schema.Types.ObjectId,
           ref: thoughts

        }],

        friends: [{
            _id: Schema.Types.ObjectId,
            ref: Users 
        }]
    },

    //toJSON option allows you to define the behavior of the document when it is converted to JSON.
    //virtual properties and getter functions defined true so the field value are manipulated  before they return 
    //id set false to exclude monogodb id display with json docuements
    {
    toJSON: {
          virtuals: true,
          getters: true

            },
    id: false
   },
   userSchema.virtual('friendCount')
   .get(function() {
       return this.friends.length;
   })

    //Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.    
    //virtuals means create a new field in the model ,but it does not store in the table like virtual memory.
    //here friendCount is the virtual field name
    //.get() function is a getter method for the virtual property "friendCount
    //the getter function returns the length of the "friends" array.
    //this.friends refers to the "friends" field of the current document instance

    
   
)
//design Usermodel using userSchema here User is the one of model name mentioned under the folder model
//Here variable Users used to assigned to the model, then you should export it as module.exports = Users 
//monogodb internally convert the model name to firstletter uppercase and plural Users
const Users = model('User' , userSchema);

//export the module
module.exports = Users;