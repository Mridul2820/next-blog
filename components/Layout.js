import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <span>CricHut</span>
                            <span>Blogs</span>
                        </h1>
                    </a>
                </Link>
            </header>

            <div className="page-content">
                { children }
            </div>

            <footer>
                <p>Copyright 2021 @CricHut</p>
            </footer>
        </div>
    )
}