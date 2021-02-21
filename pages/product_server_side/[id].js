export async function getServerSideProps(context) {
    const id = context.query.id;

    // Escreve nova propriedade 'id' no 'props' par ser acessada na unção 'Product'
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
