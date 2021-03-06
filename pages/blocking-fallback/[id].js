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
        fallback: 'blocking' // pausa a request até que a página tenha sido gerada
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
