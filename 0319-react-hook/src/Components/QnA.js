import UseToggle from '../hooks/UseToggle';

export default function QnA({ qna }) {
    const [isFaqOpen, setIsFaqOpen] = UseToggle();

    return (
        <div>
            <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
                Q.{qna.question}
            </div>
            {isFaqOpen && <div>A. {qna.answer}</div>}
        </div>
    );
}
