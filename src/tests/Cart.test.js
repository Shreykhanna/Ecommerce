import React from 'React'
import renderer from 'react-test-renderer'
import Cart from '../components/Cart/Cart'
test('Changes in Cart',()=>{
const component=renderer.create(<Cart/>);
let tree=component.toJSON();
expect(tree).toMatchSnapshot();

})