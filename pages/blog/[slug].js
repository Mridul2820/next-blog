import { createClient } from "contentful";
import Image from 'next/image'
import { documentToReactComponents,  } from "@contentful/rich-text-react-renderer";

import styles from '../../styles/blog.module.css';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
        content_type: "cricBlog" 
    })
  
    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
  
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'cricBlog',
        'fields.slug': params.slug
    })
  
    return {
        props: { blog: items[0] }
    }
}

export default function RecipeDetails({ blog }) {
    console.log(blog);

    const { featuredImage, title, description, blogBody} = blog.fields
    return (
        <div>
            <div className={styles.banner}>
                <Image
                    src={`https:${featuredImage.fields.file.url}`} 
                    height={featuredImage.fields.file.details.image.height}
                    width={featuredImage.fields.file.details.image.width}
                />
                <h2>{title}</h2>
            </div>
            <div className={styles.maininfo}>
                <p className={styles.description}>{description}</p>
                <div>{documentToReactComponents(blogBody)}</div>
            </div>
        </div>
    )
}