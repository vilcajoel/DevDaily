import React from 'react';
import {shallow} from 'enzyme';
import Signin from '../../componentes/Signin';

describe('Pruebas en <Signin />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Signin />);
        expect(wrapper).toMatchSnapshot();
    });

});