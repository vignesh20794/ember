import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
        let normalizedResponse = Ember.Object.create(normalizedResponse);
        normalizedResponse.data = [];
        payload.forEach(user => {
            normalizedResponse.data.push(Ember.Object.create({
                id: user.id,
                type:'user',
                attributes : user 
            }))
        });
        console.log("normalizedResponse",normalizedResponse) ;
        return this._super(store, primaryModelClass, normalizedResponse, id, requestType)
    }
});