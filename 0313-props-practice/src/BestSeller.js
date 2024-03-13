import bookImg from './book.png';
const BestSeller = ({ book }) => {
    const { title, author, price, type } = book;
    return (
        <div className="container">
            <div className="header-box">
                <span className="header">이번주 베스트셀러</span>
            </div>
            <div className="img-box">
                <img src={bookImg} alt="" />
            </div>
            <div className="detail-box">
                <div className="book-title">{title}</div>
                <div className="book-detail">
                    <div className="author">저자:{author}</div>
                    <div className="price">판매가:{price}원</div>
                    <div className="type">구분:{type}</div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
