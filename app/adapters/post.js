import DS from 'ember-data';
import typicode from './typicode';

export default typicode.extend({
    pathForType(){
        return 'posts'
    }
});
