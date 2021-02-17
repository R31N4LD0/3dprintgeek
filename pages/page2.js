import Link from 'next/link';

function Page2() {
    return (<>
        <div>Page two</div>
        <Link href="/">
            <a>Home</a>
        </Link>
    </>);
}

export default Page2;