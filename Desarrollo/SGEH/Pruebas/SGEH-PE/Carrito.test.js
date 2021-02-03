import React from 'react';
import {shallow} from 'enzyme';
import Carrito from '../../componentes/Carrito';

describe('Pruebas en <Carrito />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Carrito />);
        expect(wrapper).toMatchSnapshot();
    });

});