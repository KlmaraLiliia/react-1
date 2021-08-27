import './characterComponent.css';
function CharacterComponent(props) {
    let{image,name,age}=props;
    return <div>
        <div>
            <img src={props.image} alt=""/>
            <h3>
                {props.name}
            </h3>
            <p>
                {props.age}
            </p>
        </div>
    </div>
}

export default CharacterComponent;