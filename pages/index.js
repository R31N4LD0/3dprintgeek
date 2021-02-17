import Link from 'next/link';

function Home() {
    return (<>
        <div>Testing: Vercel</div>
        <Link href="/page2">
            <a>Page 2</a>
        </Link>
    </>);
}

export default Home;