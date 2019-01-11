import Link from "next/link";

export default () => (
    <nav>
        <ul>
            <li><a href="/index" className="k">home<span>&gt;</span></a></li>
            <li><a href="/projects" className="k">projects<span>&gt;</span></a></li>
            <li><a href="#" className="k">résumé<span>&gt;</span></a></li>
            <Link href="/about">
                <a href="#" className="k">about<span>&gt;</span></a>
            </Link>
        </ul>
    </nav>
);


