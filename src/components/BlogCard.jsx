export default function BlogCard({data}) {
    return (
        <div className="blog-card">
            <h1>{data.heading}</h1>
            <p>{data.blog}</p>
        </div>
    )
}