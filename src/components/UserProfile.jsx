import './UserProfile.css';
// import women from '../Assets/women1.jpg';
const UserProfile = (props) =>{
    const {userDetails,deleteUser} = props;
    const{name,role,imageUrl,id} = userDetails;
    const onDelete = () => {
      deleteUser(id)
    };
    return(
        <li className="user-card-container">
            <img src={imageUrl} class="img" alt="avatar"/>
            
            <div className="user-details-container">
             <h1 className="user-name">{name}</h1>
             <p className="user-designation">{role}</p>
            </div>
            <button className="dlt-button" onClick={onDelete}>
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" className="dlt-icon" alt="deleate"/>
            </button>
     
        </li>
    )
};

export default UserProfile;
// for lineno 8 don't have urls for img so thats why adjusting single image here