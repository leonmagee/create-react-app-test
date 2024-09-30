type UserType = {
    name: string,
    tax: number,
}

const User = ({name, tax}: UserType) => {

    return(
        <div className="user card p-3">
            <h2>{name}</h2>
            <p>
                Tax due: {tax}!
            </p>
        </div>
    )
}

export default User;