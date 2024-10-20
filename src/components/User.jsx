//Exercício08

const User = ({online}) =>{
    return(
    <div>
    {online ? "User Online" : "User Offline"};
    </div>
    )
}
export default User;