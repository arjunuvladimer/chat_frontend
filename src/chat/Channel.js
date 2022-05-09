const Channel = ({channel: {name,participants}}) => {
    return(
        <>
            <div className="channel-item">
                <span>{name}</span>
                <span>{participants}</span>
            </div>
        </>
    )
}

export default Channel