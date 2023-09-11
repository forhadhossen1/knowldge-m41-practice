import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const {id, title, cover, author_img, reading_time, name, posted_date, hashtag} = blog
    return (
        <div className='mb-20'>
            <img className='w-full py-5' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={author_img} alt="autohor img" className='w-16 h-16 rounded-full' />
                    <div>
                        <h3 className='text-2xl'>{name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>

                    <button onClick={() => handleAddToBookmark(blog)}
                    className='ml-4 text-2xl'><i className="fa-solid fa-bookmark"></i></button>
                </div>
            </div>

            <h2 className='text-3xl my-6'>{title}</h2>
            <p>               
                    <a href="">#{hashtag}</a>              
            </p>
            <button onClick={()=>handleReadingTime(id, reading_time)} className='mt-6 text-blue-800 underline font-bold'>Marked As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;