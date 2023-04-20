import "./home.css"

export const HomePage = () => {
    return <div className="video__container">
                <iframe className="video__embed"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/j2r2nDhTzO4?start=71&autoplay=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
}