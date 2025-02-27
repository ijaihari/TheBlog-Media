import { useNavigate } from "react-router-dom";
function Intro() {
    const navigate = useNavigate()
    return (

        <div className="introsection">
            <section className="intro">
                <h2 className="intro-idea">Uncover the fresh perspectives, ideas, and <br /> knowledge through the power of blogs.</h2>
                <p className="intro-about">TheBlog Media is an open platform where readers find dynamic thinking, and where expert and undiscovered <br /> voices can share their writing on any topics. </p>
                <button className="blog-read" onClick={() => navigate('/blogs')}>Start Reading <i class="fa-solid fa-circle-arrow-right"></i></button>{/* 
            <button className="scroll-down">Scroll down <i class="fa-solid fa-arrow-down"></i></button> */}
            </section>
            <hr />
            <section className="intro-samples">
                <section>
                    <h1>Trending Blog</h1>
                </section>
                <section>
                    <h2>Recent Blogs</h2>
                </section>
            </section>
        </div>
    );
}

export default Intro;