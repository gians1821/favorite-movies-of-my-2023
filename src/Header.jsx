import './Header.css'

function Header() {
    return (
        <header className='header'>
            <h2 className='header-title'><span className='header-higlight'>He visto</span><span className='header-number'>101</span> películas y series <span className='header-year'>en 2023</span></h2>
            <p className='header-description'>Estas son mis favoritas...</p>
        </header>
    );
}

export { Header }