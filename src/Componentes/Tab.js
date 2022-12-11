//style
import "../styles.css";
import CustomLink from '../hook/CustomLink';

const Tab = () => {
    return (
        <div className='tab-container mg-auto'>
            <ul>
                <li>
                    <CustomLink className='inline-block' to="/profile-user/posts">
                        <button className='font-press-2p align-center column'>
                            POSTS
                        </button>
                    </CustomLink>
                    <CustomLink className='inline-block' to="/profile-user/favorites">
                        <button className='font-press-2p align-center column'>
                            FAVORITES
                        </button>
                    </CustomLink>
                </li>
            </ul>
        </div>
    )
}

export default Tab;