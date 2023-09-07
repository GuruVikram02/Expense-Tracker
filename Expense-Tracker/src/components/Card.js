function Card(props){
    const classes= "Card "+props.className;
    // console.log(classes);
    return(

        <div className={classes}>{props.children}</div>

    );
}

export default Card;