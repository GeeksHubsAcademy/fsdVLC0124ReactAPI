import "./Card.css"

export const Card = ({name, species, image, clickFunction }) => {

    return (
        <div className="cardDesign" onClick={clickFunction}>
            <div>{name}</div>
            <div>{species}</div>
            <div><img className="avatarDesign" src={image} alt={name}/></div>
        </div>
    )
}