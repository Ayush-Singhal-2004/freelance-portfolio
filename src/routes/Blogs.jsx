import Card from "../components/BlogCard";
import NavigationBar from "../components/NavigationBar"
import { useState, useEffect } from "react"
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer"

function Blogs() {

    const[blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/data/blogs.json")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setBlogs(res.data);
        })
    }, []);

    return (
        <div className="blogs">
            <NavigationBar selected={"blogs"} />
            <div className="blogs-content">
                {
                    blogs.map((item, index) => 
                        <div key={index}>
                            <BlogCard data={item} />
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Blogs