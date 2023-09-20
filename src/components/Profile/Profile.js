import React from "react";

const Profile = ({ profileName = '', isMenu = false, handleClick }) => {
  return (
    <div className={'profile' + (isMenu ? ' profile_visible' : '')} onClick={handleClick}>
      <h2 className='profile__title'>{profileName}</h2>
      <span className='profile__icon'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.42985 7.96781C8.79169 7.40572 9.7501 6.06478 9.7501 4.5C9.7501 2.42893 8.07117 0.75 6.0001 0.75C3.92903 0.75 2.2501 2.42893 2.2501 4.5C2.2501 6.06473 3.20845 7.40563 4.57021 7.96775C3.17555 8.19993 1.89263 8.76594 0.80835 9.58058L2.1899 11.4194C3.25119 10.6221 4.56874 10.15 5.99986 10.15C7.43098 10.15 8.74852 10.6221 9.80981 11.4194L11.1914 9.58058C10.1072 8.76601 8.82438 8.20003 7.42985 7.96781Z" fill="white"/>
        </svg> 
      </span>
    </div>
  );
}

export default Profile;