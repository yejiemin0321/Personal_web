import React from 'react';
import './App.css';
import avatar from '../img/profile.jpg';
// import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <div className='left'>
                    <div className='image-contener'>
                        <img className='photo' src={avatar} alt='profile'></img>
                    </div>
                </div>
                {/* <div className='contact'>
                    <p><span ><AiOutlineMail /></span> jiemin.ye@etu.utc.fr</p>
                    <p><span ><AiOutlinePhone /></span> 0750501088</p>
                    <p><span><AiOutlineHome /></span> 60 rue notre dame de bon secours, 60200, Compiègne</p>
                </div>
                <div className='present'>
                    Je suis une étudiante à la recherche du stage fin d'étude.
                </div> */}
                <div className='right'>
                    <div className='namebox'>Jiemin YE</div>
                </div>
            </div>
        );
    }
}

export default Profile;