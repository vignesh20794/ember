import Ember from 'ember';

export default Ember.Controller.extend({
    isUpdate : false,
    isCreate :true,
    editId : undefined,
    actions :{
        createPosts(){
            let title = this.get('title');
            let body = this.get('body');
            // create a record in Ember Data (locally, would not survive page refresh)
            let postRecord = this.store.createRecord('post', {
                title: title,
                body:body
            })
            console.log("postRecord",postRecord);
            // Save the record to the API endpoint specified in adapters/post.js
            postRecord.save().then(function(data){
                if(data){
                    alert("created");
                }
            })
        },

        getEdit(param){
            this.isCreate = false;
            this.editId = param.id;
            //setting value into form 
            this.set ('title', param.data.title);
            this.set('body',param.data.body);
        },
        updatePosts() {
            let data = {};
            let updatedTitle = this.get('title')
            let body  = this.get('body')           
            this.store.findRecord('post', this.editId ).then(function(post) {
                // ...after the record has loaded
                post.set('title', updatedTitle),
                post.set('body', body) // locally update the title
                post.save();
              });
          },

        deletePosts(param){
            this.store.findRecord('post', param.id,{ backgroundReload: false }).then(function(post){
                post.unloadRecord();
                post.get('isDeleted'); // => true
                post.save(); // => DELETE to /posts/1
            });
           
        }
    }
});
