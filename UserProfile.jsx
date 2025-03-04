import { useParams } from 'react-router-dom';
function UserProfile() {
    let { username } = useParams();
    return <h1>Profile of {username}</h1>;
}
export default UserProfile
