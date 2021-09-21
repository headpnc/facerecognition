import React from 'react';
import './ImageLinkForm.css'



const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className="">
				<div className='form pa4 br3 shadow-5 center'>
					<input type='text' className='f4 pa2 w-two-thirds' onChange= { onInputChange }/>
					<button 
					className='w-auto grow f4 link ph3 pv2 dib white bg-light-purple' 
					onClick= { onButtonSubmit }>
						Detect
					</button>
				</div>						
			</div>		
		</div>
	);
}

export default ImageLinkForm;