import ProfileCard from './ui/ProfileCard/ProfileCard';
import photo from '../assets/personal_photo.jpeg';

const Profile = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center relative p-8'>
    <h1 className="text-white text-4xl font-bold text-staat text-center pb-8">Coded With Passion By</h1>
      <ProfileCard className='w-[400px]'
  name="Puneet Kumar"
  title="Full Stack Developer"
  handle="puneetkr-06"
  status="Online"
  contactText="Contact Me"
  avatarUrl={photo}
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
    </div>
  )
}

export default Profile
