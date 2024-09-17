import Image from "../atom/Image";
import Name from "../atom/Name";
import Message from "../atom/Message";
function Profile({ profile }) {
    return <div>
        <Image url={profile.pic} />
        <Image url={profile.pic} />
    </div>
}

export default Profile;