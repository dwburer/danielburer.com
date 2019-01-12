import Link from "next/link";

export default () => (
    <nav>
        <ul>
            <li>
                <Link href="/index">
                    <a href="#" className="k">home<span>&gt;</span></a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a href="#" className="k">projects<span>&gt;</span></a>
                </Link>
            </li>
            <li>
                <a href="/static/DanielBurer_Resume2019_public.pdf" target="_blank" className="k">résumé<span>&gt;</span></a>
            </li>
            <li>
                <Link href="/about">
                    <a href="#" className="k">about<span>&gt;</span></a>
                </Link>
            </li>
        </ul>
    </nav>
);


