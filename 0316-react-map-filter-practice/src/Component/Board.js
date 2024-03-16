export default function Board({ idx, boardData, deleteData }) {
    const { title, writer } = boardData;
    return (
        <tr
            onDoubleClick={() => {
                deleteData(boardData);
            }}
        >
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{writer}</td>
        </tr>
    );
}
