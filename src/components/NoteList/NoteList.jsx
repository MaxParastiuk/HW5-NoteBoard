import "./NoteList.css";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList({ notes, onDeleteButtonClick, onChangeArea }) {
	return (
		<>
			<div className='flex_box__container'>
				{notes.map((note) => (
					<NoteItem
						key={note.id}
						item={note}
						onChangeArea={onChangeArea}
						onDeleteButtonClick={onDeleteButtonClick}
					/>
				))}
			</div>
		</>
	);
}
