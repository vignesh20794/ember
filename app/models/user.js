import DS from 'ember-data';

const {
    attr,
    hasMany
} = DS;

export default DS.Model.extend({
    //has Many relationhip 
    posts : hasMany('post', { async: true }),


    name: attr('string'),
    email : attr('string'),
    website : attr('string'),
    phone: attr('string')
    
});
