import React from 'react';
import {shallow} from 'enzyme';
import Encabezado from '../../componentes/Encabezado';

describe('Pruebas en <Encabezado />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Encabezado />);
        expect(wrapper).toMatchSnapshot();
    });

});