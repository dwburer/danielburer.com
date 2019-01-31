import Link from "next/link";

export default () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a href="#" className="k">
                        <div className='nav-fill'></div>
                        <span className="label">home</span><span className="chevron">&gt;</span>
                    </a>
                </Link>
            </li>
            {/*<li>*/}
                {/*<Link href="/projects">*/}
                    {/*<a href="#" className="k">projects<span>&gt;</span></a>*/}
                {/*</Link>*/}
            {/*</li>*/}
            <li>
                <Link href="/about">
                    <a href="#" className="k">
                        <div className='nav-fill'></div>
                        <span className="label">about</span><span className="chevron">&gt;</span>
                    </a>
                </Link>
            </li>
            <li>
                <a href="/static/DanielBurer_Resume2019_public.pdf" target="_blank" className="k">
                    <div className='nav-fill'></div>
                    <span className="label">résumé</span><span className="chevron">&gt;</span>
                </a>
            </li>
        </ul>
    </nav>
);


