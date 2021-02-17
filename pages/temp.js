function Temp(props) {
    const newDate = new Date();
    const dateString = newDate.toGMTString();

    return (<>
        <div>{dateString} (dynamic)</div>
        <div>{props.dateString2} (static)</div>
    </>);
}

export function getStaticProps() {
    const newDate2 = new Date();
    const dateString2 = newDate2.toGMTString();

    return {
        props: {
            dateString2
        }
    }
}

export default Temp;