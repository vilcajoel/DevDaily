import React from 'react';
import {shallow} from 'enzyme';
import CatalogoProductos from '../../componentes/CatalogoProductos';

describe('Pruebas en <CatalogoProductos />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<CatalogoProductos />);
        expect(wrapper).toMatchSnapshot();
    });

});