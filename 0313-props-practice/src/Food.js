const Food = ({ food, children }) => {
    return (
        <div>
            <div className="food">{food}</div>
            <div>{children}</div>
        </div>
    );
};

Food.defaultProps = {
    food: '한식',
};

export default Food;
