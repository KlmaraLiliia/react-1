export default function User({item}){

    return (
        <div>
            <h4> {item.id}-{item.name}-{item.age}</h4>
            <div>
                city-{item.address.city}
                <br/>
                street - {item.address.street}
                <br/>
                house№ - {item.address.number}
            </div>
        </div>
    );
}