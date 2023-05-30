
const { model, Schema, Types} = require('mongoose');
const { schema } = require('./user');
const reactionSchema = new Schema(
    {
        //field
        reactionId:
        {
         type: Schema.Types.ObjectId,
         default: () => new Types.ObjectId()
        },
        reactionBody:
        {
         type: String,
         required: true,
         maxlength: 280
         
        },
        username:
        {
         type:String,
         required: true
        },
        createdAt:
        {
         type: Date,
         defalut: Date.now,
         get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
    },
        {
            toJSON: {
              getters: true,
            },
            id: false,
        }
)
const Reactions = model('Reaction' , reactionSchema);
exports.module = Reactions