import React from 'react';
import {shallow} from 'enzyme';
import { Footer } from '../../componentes/Footer';

describe('Pruebas en <Footer />', ()=>{
    test('Debe mostrar componente correctamente', ()=>{
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

});