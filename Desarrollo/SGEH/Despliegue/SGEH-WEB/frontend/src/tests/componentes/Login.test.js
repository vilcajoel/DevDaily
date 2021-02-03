import React from 'react';
import {shallow} from 'enzyme';
import Login from '../../componentes/Login';

describe('Pruebas en <Login />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

});