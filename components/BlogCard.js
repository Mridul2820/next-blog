import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/blogcard.module.css';

const BlogCard = ({ blog }) => {
    const {slug, title, thumbnail, description } = blog.fields
    return (
        <div className="card">
            <div className={styles.featured}>
                <Image 
                    src={`https:${thumbnail.fields.file.url}`} 
                    height={thumbnail.fields.file.details.image.height}
                    width={thumbnail.fields.file.details.image.width}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                </div>
                <div className={styles.actions}>
                    <Link href={'/blog/' + slug}>
                        <a>See More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
