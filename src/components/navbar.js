import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="w-full h-[72px] bg-gray-200 flex justify-center">
            <div className="max-w-[1440px] text-white text-normal flex justify-between items-center flex-auto">
                <a href="/"><img className='h-[70px] w-auto' src={logo} /></a>
                <ul className='list-none flex text-normal font-base gap-6'>
                    <li><a href='/'>Por Que</a></li>
                    <li><a href='/'>Servicios</a></li>
                    <li><a href='/'>Portafolio</a></li>
                    <li><a href='/'>Contacto</a></li>
                </ul>
                <button type="button" className='px-6 py-3 rounded-xl bg-purple-600 font-medium'>Agenda Ya</button>
            </div>
        </div>
    )
}

export default Navbar;