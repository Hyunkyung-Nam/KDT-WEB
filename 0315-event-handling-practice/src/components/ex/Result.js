export default function Result(props) {
    const { fruit, background: backgroundColor, color, content } = props.data;

    return (
        <div>
            <img src={`/${fruit}.png`} alt="" />
            <br />
            <span style={{ color, backgroundColor }}>{content}</span>
        </div>
    );
}
