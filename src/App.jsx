
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const[readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time)
    // console.log(setReadingTime)
    // remove book mark read 
    const remainingBookmars = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmars);
  }


  return (
    <>

      <Header></Header>
      <main className='md:flex'>
        <div className='w-2/3'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime = {handleReadingTime}></Blogs>
        </div>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
