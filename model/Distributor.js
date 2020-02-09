const mongoose = require('mongoose')

const distributorSchema = mongoose.Schema({
     name: {
         type: String
     },
     distributionTeam: {
         type: String
     },
    link: {
        type: String
    },
     dateCreated:{
         type: Date,
         default: Date.now 
     },
})



distributorSchema.set('toJSON', { virtuals: true });


const Distributor = mongoose.model('Distributor', distributorSchema)

module.exports = Distributor