import React from 'react';
import './ModalWindow.css';

function ModalWindow({ modalActive, setModalActive, modalContent }) {
	return (
		<div
			onClick={() => setModalActive(false)}
			className={modalActive ? 'Modal ModalActive' : 'Modal'}
		>
			<div className='ModalWindow' onClick={(e) => e.stopPropagation()}>
				<h3>{modalContent.title}</h3>
				<div>{modalContent.description}</div>
				<div>price ${modalContent.price}</div>
			</div>
		</div>
	);
}

export default ModalWindow;
