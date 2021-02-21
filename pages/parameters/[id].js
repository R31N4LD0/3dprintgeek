import {useRouter} from 'next/router';

function SearchById () {
    const router = useRouter();
    const urlId = router.query.id;

    return (
        <div>URL id: {urlId}</div>
    );
}

export default SearchById;