import "./card.scss"

function Card(){
    return(
        <div className="card__block">
            <img src="/img/pizza/pizza_1.png" alt="pizza" />

            <h1>Чизбургер-пицца</h1>

            <div className="card__filter-block">
                <div className="card__filter-wrapper">
                    <div className="property-checked">
                        <span className="span-property">тонкое</span>
                    </div>

                    <div className="property-unchecked">
                        <span className="span-property">традиционное</span>
                    </div>

                    <div className="pizza_size-checked">
                        <span className="span-property">26 см.</span>
                    </div>

                    <div className="pizza_size-unchecked">
                        <span className="span-property">30 см.</span>
                    </div>

                    <div className="pizza_size-unchecked">
                        <span className="span-property">40 см.</span>
                    </div>
                </div>
            </div>

            <div className="price-order_container">
                <span> от 8.99 $</span>
                <div className="order_container">
                    <img src="/img/icon/plus.svg" alt="add" />
                    <span>Добавить</span>
                    <div className="count">
                        <p>2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card