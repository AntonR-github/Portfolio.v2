import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials(): JSX.Element {
    return (
        <div className="HeaderSocials">
			<a href="" target="_blank"><BsLinkedin/></a>
            <a href="" target="_blank"><FaGithub/></a>
        </div>
    );
}

export default HeaderSocials;
