import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ blog }) => {
    const {slug, title, thumbnail, description } = blog.fields
    return (
        <div className="card">
            <div className="featured">
                <Image 
                    src={`https:${thumbnail.fields.file.url}`} 
                    height={thumbnail.fields.file.details.image.height}
                    width={thumbnail.fields.file.details.image.width}
                />
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
