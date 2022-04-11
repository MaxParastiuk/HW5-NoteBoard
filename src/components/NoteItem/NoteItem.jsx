import "./NodeItem.css";

export default function NoteItem({ item, onDeleteButtonClick, onChangeArea }) {
	const { description, id } = item;

	const onDeleteBtnClick = (e) => {
		e.stopPropagation();
		onDeleteButtonClick(id);
	};

	const changeArea = (e) => {
		onChangeArea(id, { [e.target.name]: e.target.value });
	};

	return (
		<div className='flex_box__item'>
			<button className='btn btn-danger' onClick={onDeleteBtnClick}>
				X
			</button>
			<textarea
				className='text_area'
				name='description'
				id={id}
				onChange={changeArea}
				cols='30'
				rows='10'
				value={description}></textarea>
		</div>
	);
}
