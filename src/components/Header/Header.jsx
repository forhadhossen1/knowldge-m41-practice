import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center my-5 border-b-4'>
            <h1 className='text-3xl font-black'>Knowledge Caffe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;