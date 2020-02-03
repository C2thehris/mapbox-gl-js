// @flow
import {createLayout} from '../util/struct_array';

export const skyboxAttributes = createLayout([
    {name: 'a_pos',  components: 3, type: 'Int16'}
]);

export default skyboxAttributes;
export const {members, size, alignment} = skyboxAttributes;