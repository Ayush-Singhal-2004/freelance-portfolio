import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="home">
            <NavigationBar selected={"home"} />
            <div className="home-content">
                <h1 className="home-heading">Welcome to our website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odit ullam numquam dolorem molestiae placeat explicabo aspernatur, maxime nemo tenetur quis harum eaque eveniet nostrum, corrupti sint quam illo non.Voluptates aliquam reprehenderit itaque iste dignissimos aliquid consectetur expedita neque, natus at, quas sapiente tempora amet aut, similique iure repellendus. Fuga ipsum enim quam eos. Ad, consequatur? Esse, exercitationem odio. Magni, iusto tenetur quis eum maxime reiciendis doloribus accusamus aliquid nisi aliquam fugit ab blanditiis cupiditate est sint voluptatem at ex possimus nostrum vel id ipsam quod. Non, voluptate error.</p>
            </div>
            <div>
            <div className="home-content" 
            style={{display: "flex", gap: "2vw", alignItems: "center"}}
            >
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium numquam modi nemo id. Quas quidem, cumque dolor optio autem consectetur, nam, ex sit molestiae maiores iusto itaque culpa odio ad! Quia ex, consequuntur expedita sunt quo animi? Sapiente fugit minima cupiditate, id doloremque saepe voluptas perferendis esse ea omnis rem voluptatem distinctio, dignissimos soluta perspiciatis praesentium architecto facere. Officia, dolorum.
                </p>
            </div>
            </div>
            <div className="home-content">
                <h1 className="home-heading">We are committed to :</h1>
                <ul>
                    <li>Place the interest of Clients before ours.</li>
                    <li>Uphold high standards of Honesty and Intergrity.</li>
                    <li>Endeavour to improve the quality of services.</li>
                    <li>Excellence in professional services</li>
                    <li>Continuos education and training of staff and clients</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home