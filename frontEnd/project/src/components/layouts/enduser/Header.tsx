import './css/Header.css';

const Header = () => {
    return (
        <header className='header-container'>
            <div className={'header-logo-wrapper'}>
                <img className={'header-logo-image'} src="/movieing_logo.png" alt="Movieing" />
            </div>

            <div className={'header-search-wrapper'}>
                <form>
                    <input type="search" className={'header-search-input'} />
                    <button type="submit" className={'header-search-btn'}>🔎</button>
                </form>
            </div>

            <div className={'header-btn'}>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        </header>
    );
};

export default Header;