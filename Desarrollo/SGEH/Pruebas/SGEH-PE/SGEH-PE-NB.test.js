import React from 'react';
import {shallow} from 'enzyme';
import { NavBar } from '../../componentes/NavBar';

describe('Pruebas en <NavBar/>', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<NavBar />);
        expect(wrapper).toMatchSnapshot();
    });

});