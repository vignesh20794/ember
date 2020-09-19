import DS from 'ember-data';

const {
    attr,
    hasMany
} = DS;

export default DS.Model.extend({
    //has Many relationhip 
    name: attr("string"),
    email: attr("string"),
    posts: hasMany("post"),
    website : attr('string'),
    phone: attr('string')
    
});
