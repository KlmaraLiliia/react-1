export default function Animal(props) {
    let{name,type,age}=props;
    return (
        <div>
            <h4>{name}{type}</h4>
            <p>{age}</p>

        </div>
    );
}

