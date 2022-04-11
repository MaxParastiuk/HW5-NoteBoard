import { useCallback, useEffect } from "react";
import useAsync from "../../hooks/common";
import {
	createSticker,
	getStickers,
	updateSticker,
	deleteSticker,
} from "../../services/method";
import NoteList from "../NoteList/NoteList";
import "./NoteBoard.css";

export default function NoteBoard() {
	const {
		run,
		status,
		value: notes,
		setValue: setNote,
	} = useAsync(getStickers);
	useEffect(() => run(), []);

	const onDeleteButtonClick = (id) => {
		const newNote = notes.filter((item) => item.id !== id);
		deleteSticker(id);
		setNote(newNote);
	};

	const onAddButtonClick = useCallback(() => {
		const newNote = {
			description: "",
		};
		createSticker(newNote).then((data) => {
			setNote([...notes, data]);
		});
	}, [notes]);

	const onChangeArea = (id, value) => {
		const item = notes.find((note) => note.id === id);
		const newItem = { ...item, ...value };
		updateSticker(newItem);
		const newNotes = notes.map((note) =>
			note.id === newItem.id ? newItem : note
		);
		setNote(newNotes);
	};

	return (
		<>
			<h1>{status}</h1>
			{status === "success" && (
				<NoteList
					notes={notes}
					onChangeArea={onChangeArea}
					onDeleteButtonClick={onDeleteButtonClick}
				/>
			)}
			<button className='btn btn-success btn_margin' onClick={onAddButtonClick}>
				Add
			</button>
			{status === "error" && <h2>something went wrong</h2>}
		</>
	);
}
