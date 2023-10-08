import ReactModal from "react-modal";
import { useState, useEffect } from "react";

export default function Modal({ isOpen, data, handleClose }) {

	return (
		<ReactModal
			isOpen={isOpen} shouldCloseOnOverlayClick={true}
			onRequestClose={handleClose} ariaHideApp={false}
			style={{ content: { maxWidth: '400px', inset: '50% 0 0 50%', transform: 'translate(-50%,-50%)', height: '80vh' } }}>
			<div className="container">
				<button onClick={handleClose} className='float-right font-bold'>X</button>
				<div className="">
					<div className='col-auto'>
						<img src={data?.image} alt="" className='w-full' />
						<div className="my-auto py-2 font-bold">{data?.name}</div>
					</div>
					<div>
						<ul>
							<li>episodes: {data?.episode.length}</li>
							<li>status: {data?.status}</li>
							<li>species: {data?.species}</li>
							<li>gender: {data?.gender}</li>
							<li>type: {data?.type}</li>
							<li>origin: {data?.origin.name}</li>
							<li>location: {data?.location.name}</li>
						</ul>
					</div>
				</div>
			</div>
		</ReactModal>
	)

}