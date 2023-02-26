import "./navbar.scss"

function Navbar(){
    return(
        <>
        <div className="navbar__container">
            <div className="logo__container">
                <img src="/img/icon/logo.png" alt="logo-pizza" />
                <div className="logo__title">
                    <span>React Pizza</span>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>

            <div className="cart__container">
                <div className="cart__content">
                    <span>49.90  $</span>
                    <div className="cart__hor-line"></div>
                    <img src="/img/icon/cart.svg" alt="cart" />
                </div>
            </div>
        </div>
        <div className="navbar-end-line"></div>
        </>
    )
}

export default Navbar