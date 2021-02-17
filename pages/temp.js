function Temp(props) {
    console.log('test Temp');
    const newDate = new Date();
    const dateString = newDate.toGMTString();

    return (<>
        <div>{dateString} (dynamic)</div>
        <div>{props.dateString2} (static)</div>
    </>);
}

export function getStaticProps() {
    console.log('test getStaticProps');
    const newDate2 = new Date();
    const dateString2 = newDate2.toGMTString();

    return {
        props: {
            dateString2
        },
        revalidate: 60
    }
}

export default Temp;