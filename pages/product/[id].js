import {useRouter} from 'next/router';

function ProductId() {
    const router = useRouter();
    const productId = router.query.id;

    return (<>
        Id do produto: {productId}
    </>)
}

export default ProductId;