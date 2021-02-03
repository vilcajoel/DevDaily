import React from 'react';
import {shallow} from 'enzyme';
import { AboutUs } from '../../componentes/AboutUs';

describe('Pruebas en <AboutUs/>', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<AboutUs />);
        expect(wrapper).toMatchSnapshot();
    });

});