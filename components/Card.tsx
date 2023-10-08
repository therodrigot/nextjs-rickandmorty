"use client"

type CardType = {
	handleClick: any,
	image: string,
	name: string
};

export default function Card(props: CardType) {
	return (
		<>
			<div className="rounded-lg text-center p-4 pb-0 border border-2 flex flex-col" onClick={props.handleClick}>
				<img src={props.image} alt="" />
				<div className="my-auto py-2 font-bold">{props.name}</div>
			</div>
		</>
	)
}