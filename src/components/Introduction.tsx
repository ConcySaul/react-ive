function Introduction() {
    return (
        <section id="introduction" className="h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center z-0" style={{ backgroundImage: 'url("public/img/background.jpg")' }}>
            <div className="text-[#ff7ecf] font-goldman animate-slide-in-right text-4xl md:text-8xl">
                Saul Concy
            </div>
            <div className="text-[#ff7ecf] font-goldman animate-slide-in-left text-2xl md:text-4xl">
                Fullstack Developer
            </div>
        </section>
    );
}

export default Introduction;