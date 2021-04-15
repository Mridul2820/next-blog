import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";

export async function getStaticProps () {
    const clint = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await clint.getEntries({ content_type: 'cricBlog' })

    return {
        props: {
            blogs: res.items
        }
    }
}

export default function Recipes({ blogs }) {
    // console.log(blogs);

    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <BlogCard key={blog.sys.id} blog={blog} />
            ))}

            <style jsx>{`
                .blog-list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px 60px;
                }
            `}</style>
        </div>
    )
}