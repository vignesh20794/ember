import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType){
    
        let normalizedResponse = {}
        normalizedResponse.data = [];
        payload.forEach(post => {
            normalizedResponse.data.push(Ember.Object.create({
                id: post.id,
                type:'post',
                attributes : post 
            }))
        });
        console.log("normalizedResponse",normalizedResponse) ;
        return this._super(store, primaryModelClass, normalizedResponse, id, requestType)
    },

    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){
        console.log("response for single response",payload);
        let normalizedResponse = {};
        normalizedResponse.data = Ember.Object.create({
            id: payload.id,
            type:'post',
            attributes : payload 
        });
        return this._super(store, primaryModelClass, normalizedResponse, id, requestType)
    }
});
