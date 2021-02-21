export async function getServerSideProps(context) {
    const id = context.query.id;

    return {
        props: {
            id
        }
    }
}

function Product(props) {
    const id = props.id;

    return <div>Id do produto: {id}</div>
}

export default Product;
