import { authService } from "fbase";

const Profile = () => <span>Profile</span>

    const onLogOutClick = () => {authService.signOut();

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;