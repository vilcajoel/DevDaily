import React, { useState } from 'react';
import Chip from '../assets/img/chip.svg';
import Cleave from 'cleave.js/react';
import Swal from 'sweetalert2';
const Tarjeta = ({pagar}) => {
	const [creditCardNo, setCreditCardNo] = useState('');
	const [creditCardExpiryDate, setCreditCardExpiryDate] = useState('');
	const [cvv, setCVV] = useState('');

	function onCVVChange(e) {
		setCVV(e.target.rawValue);
	}
	function onCreditCardExpiryChange(e) {
		setCreditCardExpiryDate(e.target.rawValue);
	}

	function onCreditCardChange(e) {
		setCreditCardNo(e.target.rawValue);
	}
    const handleSubmit = ()=>{
        if(creditCardNo.length !== 16 || creditCardExpiryDate.length !== 4 || cvv.length !== 3){
			// TODO :implementar alert
			Swal.fire(
				'Error!',
				'Error al ingreso de credenciales',
				'error'
			  );
        }else{
			Swal.fire(
				'Exito!',
				'Exito a la hora del pago',
				'success'
			  );
            pagar.pagar();
        }
    }
	return (
		<div className="card">
			<form>
				<h1 className="card__title">Ingresar información de pago</h1>
				<div className="card__row">
					<div className="card__col">
						<label for="cardNumber" className="card__label">
							Numero de tarjeta
						</label>
						<Cleave
							placeholder="xxxx-xxxx-xxxx-xxxx"
							options={{
								creditCard: true,
							}}
							onChange={(e) => onCreditCardChange(e)}
							className="form-field card__input card__input--large"
						/>
					</div>
					<div className="card__col card__chip">
						<img src={Chip} alt="Chip" />
					</div>
				</div>
				<div className="card__row">
					<div className="card__col">
						<label for="cardExpiry" className="card__label">
							Fecha de caducidad
						</label>
						<Cleave
							placeholder="XX/XX"
							options={{ date: true, datePattern: ['m', 'd'] }}
							onChange={onCreditCardExpiryChange}
							className="form-field card__input"
						/>
					</div>
					<div className="card__col">
						<label for="cardCcv" className="card__label">
							CCV
						</label>
						<Cleave
							placeholder="CVV"
							options={{
								blocks: [3],
								numericOnly: true,
							}}
							onChange={onCVVChange}
							className="form-field card__input"
						/>
					</div>
					
				</div>

			</form>
            {/* {<button className='pagarPedido' onClick={()=> pagar.pagar()}>Pagar</button>} */}
            <button className='pagarPedido' onClick={handleSubmit}>Pagar</button>
		</div>
	);
};

export default Tarjeta;
