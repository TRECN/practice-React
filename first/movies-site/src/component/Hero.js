const Hero=({text,backdropPath})=>{
    return(
        <>
            <header className="bg-primary text-white p-5 hero-container">
                <h1 className="hero-text">{text}</h1>
                {backdropPath &&
                    <div className="hero-background" style={{backgroundImage:`url(${backdropPath})`}}></div>
                }
            </header>
        </>
    )
}

export default Hero