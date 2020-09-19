import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');
  this.route('user');
  this.route('posts', function() {
    this.route('index',{path:'/show'})
    this.route('single', {path: ":id"});
    this.route('user', {path: "user/:userId"});
  });
});

export default Router;
