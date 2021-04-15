import Link from 'next/link'

const BlogCard = ({ blog }) => {
    const {slug, title, thumbnail, description } = blog.fields
    return (
        <div className="card">
            <div className="featured">
                {/* image thumb */}
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                </div>
                <div className="action">
                    <Link href={'/blog/' + slug}>
                        <a>See More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
