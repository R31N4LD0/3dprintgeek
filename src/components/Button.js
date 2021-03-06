export function Button(props) {
    return (
        <button style={{ backgroundColor: props.color }} className="testButton">
            {props.children} - Componente Botão {props.extraText}
        </button>
    );
}