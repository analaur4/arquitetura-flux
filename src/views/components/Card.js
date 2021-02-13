function Card(props) {
    return (
        <div className="card-item">
            <img src={ props.props.icon_url } alt={ props.props.value } />
            <p>{ props.props.value }</p>
        </div>
    )
}

export default Card
