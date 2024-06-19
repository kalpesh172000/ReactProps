import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <Paragraph content = {props.id} />
                <h2 className="name">{props.name}</h2>
                <Avatar className="circle-img" imgURL={props.imgURL} />
            </div>
            <div className="bottom">
                <Paragraph content = {props.phone} />
                <Paragraph content = {props.email} />
            </div>
        </div>
    );
}

export default Card;
