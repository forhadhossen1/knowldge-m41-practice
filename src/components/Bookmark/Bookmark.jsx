import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark
    return (
        <div>
            <h3 className='text-xl bg-white rounded-md mx-3 my-4 p-3'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;