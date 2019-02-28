import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() })

test('renders without crashing', () => {
  const wrapper = shallow(<App />)

});

test('render increment button', ()=> {

})

test ('render counter display', () => {

})
test ('counter start at 0', () => {

})

test ('clicking button incremets counter display', () => {

})