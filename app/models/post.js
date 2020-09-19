import DS from 'ember-data';

const {
    attr,
    belongsTo
} = DS; 

export default DS.Model.extend({
    //relationship with user
    userId : belongsTo("user"),
    title : attr("string"),
    body : attr("string")

    
});
