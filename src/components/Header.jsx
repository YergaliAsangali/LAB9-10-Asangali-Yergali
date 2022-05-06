import React from 'react'
import que from "./../components/img/que.png";
import tel from "./../components/img/tel.png";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return <header className='header'>

            <div className='top-menu'>
                <div className='top-menu-1'>Chocolife.me <div className='top-child'>Купоны и скидки</div></div>
                <div className='top-menu-2'>&nbsp;Chocotravel.com <div
                    className='top-child'>&nbsp;&nbsp;&nbsp;Авиабилеты</div></div>
                <div className='top-menu-3'>Lensmark.kz &nbsp;&nbsp;
                    <div className='top-child'>Оптика</div>
                </div>
                <div className='top-menu-4'>Chocofood.kz &nbsp;&nbsp;&nbsp;
                    <div className='top-child'>Заказ еды</div>
                </div>
                <div className='top-menu-5'>&nbsp;&nbsp;&nbsp;iDoctor.kz&nbsp;&nbsp;&nbsp;
                    <div className='top-child'> Поиск врачей</div>
                </div>
                <div className='help'>
                    <div className='helpImg'><img src={que} width="18" height="18"/></div>
                    <div className="H">Помощь</div>
                </div>
                <div className='number'>
                    <div className='telImg'><img src={tel} width="18" height="18"/></div>
                    <div className="T">+7 (771..</div>
                </div>

                {button}

                <div
                    className='spacing'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div className='top-menu-bot'>
                &nbsp;&nbsp;&nbsp;<img className='choc'
                                       src={'https://chocolife.object.pscloud.io/static/angular/assets/icons/logo_new.svg'}
                                       width="140" height="50"/>
                <div className='city'><img className='marker' src={'https://cdn-icons-png.flaticon.com/512/8/8168.png'}
                                           width='18' height='18'/>Алматы
                </div>
                <div className="searchLabel" onMouseDown={clickHandler}><label htmlFor=""/>
                    <input type="text" placeholder="Я ищу..."/></div>
                <button id="buttonFind">Найти</button>
                <button id="buttonEnter">Войти</button>
                <div className='createAcc'><a href="">Создать аккаунт</a></div>
                <div className='cart'><img className='choc'
                                           src={'https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png'}
                                           width="25" height="25"/>&nbsp;&nbsp;Корзина
                </div>
            </div>


        </header>
    }
}
function clickHandler() {

    var a=document.getElementById('buttonFind')
    if ( a.style.backgroundColor !== "#FDDA0D")
        a.style.backgroundColor = "#FDDA0D"
}

function LoginButton(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <button className="button" onClick={props.onClick}>
            KAZ
        </button>
    );
}

function LogoutButton(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <button className="button" onClick={props.onClick}>
            RUS
        </button>
    );
}
export default Header;
