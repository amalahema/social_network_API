
//object destructuring used to extract the model and Schema properties from the mongoose module and that module and that module is exported to other page by mentioning at the bootom module.exports=variablename (assigned to get the functionality of the model and schema) at line 63
const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

//schema is the one of the mongoose properties
const thoughtSchema = new Schema(
    {   
        //column name
        thoughtText:
        {
            //field nmae in the column
            type: String,
            required: true,
            minLength: 1,
            maxlength: 280
        },
        createdAt:
        {
          type: Date,
          default: Date.now,//use the current date
          //get is the function  use to change the date in to string
          //timeStamp is the parameter name represents the current value of createdAt field,stored in the new Date object 
          get: (timestamp) => new Date(timestamp).toLocaleDateString()


        },
        username:
        {
            type: String,
            required: true
        },

        //`reactions` (These are like replies)
        reactions:
        {
          //need to include reactionschema
          reactions: [reactionSchema],
        }
        
    },
    //toJSON and id are additional properties that can be passed as options to the Schema constructor to customize the behavior of the schema.
     //virtual properties and getter functions defined true so the field value are manipulated  before they return 
    //id set false to exclude monogodb id display with json docuements
    //you can ensure that sensitive information about your data storage is not exposed to clients.
       {
        toJSON: {
              virtuals: true,
              getters: true
    
                },
        id: false
       },
       );
        //virtual property called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
        thoughtSchema.virtual('reactionCount') .get(function ()
        {
        return this.reactions.length;
        }) 
  

//here model name Thought already in the model folder
      const Thoughts = model('Thought', thoughtSchema);
//export the thoughts module
      module.exports = Thoughts;