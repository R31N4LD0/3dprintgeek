export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            },
        },{
            params: {
                id: '2'
            },
        }],
        fallback: true // faz com que a página solicitada seja criada assincrona, se conseguir
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

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
