import React from 'react';
import {shallow} from 'enzyme';
import ProductoCard from '../../componentes/ProductoCard';

describe('Pruebas en <ProductoCard />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<ProductoCard />);
        expect(wrapper).toMatchSnapshot();
    });

});