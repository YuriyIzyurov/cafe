import {LogoutIcon, ProfileAvatar, UserProfileWrapper} from "./NavStyles";
import history from "public/images/history2.jpg";
import Image from "next/image";
import {IoMdLogOut} from "react-icons/io";
import {removeTokensStorage} from "../../utility/auth.helper";
import {useActions} from "../../hooks/useActions";
import {useState} from "react";


const UserProfile = ({name}:{name:string}) => {
    const [isLogoutIconActive, setIsLogoutIconActive] = useState(false)

    const {login, deleteError, logout} = useActions()
    const handleClick = () => {
        logout()
        removeTokensStorage()
    }
    const toggle = () => {
        setIsLogoutIconActive(!isLogoutIconActive)
    }
    return (
        <UserProfileWrapper>
            <ProfileAvatar onClick={toggle}>
                <Image src={history}  alt='history' fill style={{objectFit:"cover"}}/>
            </ProfileAvatar>
            {name === 'superadministrator' ? <span>Суперадмин</span> : <span>Администратор</span>}
            <LogoutIcon
                active={isLogoutIconActive}
                onClick={handleClick}>
                <span>Выйти</span>
                <IoMdLogOut/>
            </LogoutIcon>
        </UserProfileWrapper>
    );
};

export default UserProfile