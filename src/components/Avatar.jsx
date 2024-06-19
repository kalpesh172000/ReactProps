function Avatar(props)
{
    return(
        <img className={props.className} src={props.imgURL} alt="avatar_img"/>
    )
}

export default Avatar;