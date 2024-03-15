export default function Input({ setData }) {
    return (
        <div>
            내용 :{' '}
            <input
                type="text"
                placeholder="내용을 입력하세요"
                onChange={(e) => {
                    setData((preData) => {
                        return { ...preData, content: e.target.value };
                    });
                }}
            />
        </div>
    );
}
