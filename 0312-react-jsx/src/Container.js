import './Container.css';

export function Container() {
    return (
        <div className="container">
            <div className="circle first">
                <div className="white">
                    <div className="black"></div>
                </div>
            </div>
            <div className="circle second"></div>
            <div className="circle thrid"></div>
            <div className="circle fourth"></div>
            <div className="circle fifth"></div>
            {/* public이미지 접근 */}
            <img
                className="grass"
                //src={`${process.env.PUBLIC_URL + '/grass.png'}`}
                src="/grass.png" // '/'는 최상위루트
                alt=""
            />
        </div>
    );
}
