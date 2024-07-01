import bgImg from '../assets/bg.jpg';

const Hero = () => {
    return (
        <div className="w-full max-h-[900px] flex justify-center items-cen content-center ">
            <img className='w-full bg-center bg-no-repeat' src={bgImg} />
            <div className='container max-w-[1440px] flex justify-center mx-auto'>
                    <h1>Conectate con tu Futuro</h1>
            </div>
        </div>
    )
}

export default Hero