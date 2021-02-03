import React from 'react';
import {shallow} from 'enzyme';
import { Inicio } from '../../componentes/Inicio';

describe('Pruebas en <Inicio />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Inicio />);
        expect(wrapper).toMatchSnapshot();
    });

});