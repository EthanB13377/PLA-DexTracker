const Status = () => {
    const status = 0;
    if(status === 100){
        return(
            <div>
                <p>Complete</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>Not Complete</p>
            </div>
        )
    }
}

export default Status