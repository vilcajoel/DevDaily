import React from 'react';
import {shallow} from 'enzyme';
import VistaPrevia from '../../componentes/VistaPrevia';

describe('Pruebas en <VistaPrevia />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<VistaPrevia />);
        expect(wrapper).toMatchSnapshot();
    });

});