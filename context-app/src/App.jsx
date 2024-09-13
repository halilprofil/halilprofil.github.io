import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'

const RouterContext = createContext(null);

const routes = [
  {
    id: crypto.randomUUID(),
    name: 'Home',
    url: '#/',
    element: <Home />,
  },
  {
    id: crypto.randomUUID(),
    name: 'About',
    url: '#/about',
    element: <About />,
  },
  {
    id: crypto.randomUUID(),
    name: 'Posts',
    url: '#/posts',
    element: <Posts />,
  },
  {
    id: crypto.randomUUID(),
    name: 'Contact',
    url: '#/contact',
    element: <Contact />,
  },
];

const notFound = {
  name: 'Page not found',
  element: <NotFound />,
  // url: '',
}

function getRoute(routeUrl) {
  const route = routes.find(x => x.url === routeUrl);
  return route ?? notFound;
}

const title = "App";

function setTitle(pageTitle) {
  document.title = `${pageTitle} - ${title}`;
}

function App() {
  // const [route, setRoute] = useState(location.hash.length < 2 ? '#/' : location.hash);
  // const [route, setRoute] = useState(location.hash.length < 2 ? routes[0] : getRoute(location.hash));
  const [route, setRoute] = useState(
    () => {
      if(location.hash.length < 2) {
        return routes[0];
      }

      return getRoute(location.hash);
    }
  );

  useEffect(() => {
    setTitle(route.name);
  }, [route]);

  useEffect(() => {
    window.addEventListener('hashchange', function() {
      setRoute(getRoute(location.hash));
    });
  }, []);

  return (
    <div className="container">
      <RouterContext.Provider value={route}>
        <Header />
        <Main />
        <Footer />
      </RouterContext.Provider>
    </div>
  )
}

function Main() {
  return (
    <div className="main">
      <Content />
      <Sidebar />
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <a href="#/" className='logo'>App</a>
      <Nav />
    </div>
  )
}

function Nav() {
  const route = useContext(RouterContext);

  return (
    <ul className="nav">
      {routes.map(x => 
        <li key={x.id}>
          <a href={x.url} className={route.url === x.url ? 'selected': ''}>{x.name}</a>
        </li>)}
    </ul>
  )
}

function Content() {
  const route = useContext(RouterContext);

  return (
    <div className="content">
      <h1>{route.name}</h1>
      {route.element}
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">&copy; 2024</div>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="widget">

        
      
      </div>
    </div>
  )
}

function LikeBtn() {
  const [likeCount, setLikeCount] = useState(
    localStorage.likeCount ?
    parseInt(localStorage.likeCount) : 0
  );

  useEffect(() =>{
    localStorage.likeCount = likeCount;
  }, [likeCount]);

  function increaseLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <button className='likeBtn' onClick={increaseLikeCount}>😍 {likeCount}</button>
  )
}

function Home() {
  return (
    <>
    </>
  );
}

function About() {
  return (
    <>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus harum mollitia veniam, quidem fugiat corporis ab voluptatum odit sequi voluptate error repellat numquam nulla quae corrupti vero sunt delectus minus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus harum mollitia veniam, quidem fugiat corporis ab voluptatum odit sequi voluptate error repellat numquam nulla quae corrupti vero sunt delectus minus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus harum mollitia veniam, quidem fugiat corporis ab voluptatum odit sequi voluptate error repellat numquam nulla quae corrupti vero sunt delectus minus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus harum mollitia veniam, quidem fugiat corporis ab voluptatum odit sequi voluptate error repellat numquam nulla quae corrupti vero sunt delectus minus.</p>
    </>
  );
}

function Contact() {
  return (
    <>
    </>
  );
}

function Posts() {
  const [postId, setPostId] = useState(null);
  const [page ,setPage] = useState(1);
  const [limit , setLimit] = useState(5);

  return (
    <>
      {postId ? <PostDetail postId={postId} setPostId={setPostId}  /> : <PostList page={page} setPage={setPage} setPostId={setPostId} limit={limit} setLimit={setLimit} />}
    </>
  )
}

function PostList({ setPostId ,page,setPage,limit,setLimit }) {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(null);
  
  
  
  
// sayfa değiştiğinde data yeniden çekiliyor ve sayfadaki ilgili data geliyor
  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page-1)*limit}`)
      .then(r => r.json())
      .then(r => {
        setPosts(r.posts);
        setTotal(r.total)
      });
      localStorage.setItem('page-' + page, JSON.stringify(page));


  }, [page,limit]);

// limit değiştiğinde data ona göre çekiliyor ve sayfa limite göre render oluyor
  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page-1)*limit}`)
      .then(r => r.json())
      .then(r => {
        setPosts(r.posts);
        setTotal(r.total)
      });
  }, []);



  // pagination fonksiyonu

  const maxPage = Number((total)/(limit));

  const pageArray = new Array(Math.ceil(maxPage)).fill(0);

  function handlePage(direction) {
    console.log(total);
    if (direction === "+") {
      setPage((prev) => {
        if (page === maxPage) return maxPage;
        return prev + 1;
      });
    } else {
      if (page === 0) return;
      setPage(page - 1);
    }

    
  }


  //pagination


  // limit seçimi fonksiyonu

  function handleLimit(e){
    e.preventDefault();
    const limitValue = e.target.value;
    setLimit(Number(limitValue));
    setPage(1);
    localStorage.setItem('data', JSON.stringify(limitValue));
  }

  
 

  return (
    <>

    {/* postların render olma limitini belirleyen select  */}
      <>
        <form onChange={(e)=>handleLimit(e)}>
          <label for="cars">Choose limit post:</label>
          <select  class="select-limit" name="limit">
            <option value="" disabled selected>{limit}</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </form>
      </>

     {/* postların render olduğu bölüm  */}
      {posts.map(x => 
        <h3 key={x.id}>{x.title} <a className='open-detailpost-btn'
          href={'#/posts/' + x.id} 
          onClick={e => { e.preventDefault(); setPostId(x.id); }}
          >&gt;&gt;</a></h3>
      )}

    <div className='pagination'>
    
     {/* pagination bölümü */}

      
      {pageArray.map((button, index) => (
        <button
          key={index}
          className={index + 1 === page ? "active paginator-btn" : " paginator-btn"}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

        <button value="Prev" onClick={() => handlePage("-")}>
          Previous
        </button>

        <button value="Next" onClick={() => handlePage("+")}>
          Next
        </button>

     
      {page}
    
    </div>


    </>
  )
}



function PostDetail({ postId, setPostId }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);  
  const [newAddedComments, setNewAddedComments] = useState([]);

  
  async function getData() {
    const postData = await fetch('https://dummyjson.com/posts/' + postId).then(r => r.json());
    const commentsData = await fetch(`https://dummyjson.com/posts/${postId}/comments`).then(r => r.json());
    setPost(postData);
    setComments(commentsData.comments);
  }

  useEffect(() => {
    getData();
  }, [postId]);

  
  function handleClick(e) {
    e.preventDefault();
    setPostId(null);
  }

  function openForm(e) {
    e.preventDefault();
    setShowModal(true);  
  }

  
  function closeDialog(e) {
    e.preventDefault();
    setShowModal(false);  
  }


  function AddComment(e) {
    e.preventDefault();
    let comment = e.target[0].value;
    let fullName = e.target[1].value;
    let commentObj = {
      id: comments.length + newAddedComments.length + 1,
      comment: comment,
      fullName: fullName,
    };

   
    setNewAddedComments((prevComments) => [...prevComments, commentObj]);

    const updatedComments = [...newAddedComments, commentObj];
    localStorage.setItem('comments-' + postId, JSON.stringify(updatedComments));

   
    setShowModal(false);
  }

  useEffect(() => {
    const savedComments = localStorage.getItem('comments-' + postId);
    if (savedComments) {
      setNewAddedComments(JSON.parse(savedComments));
    }
  }, [postId]);

  return (
    <>
      
      <p><a className='back-btn' href="#" onClick={handleClick}>Back</a></p>

      {/* Post detayları */}
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr />

      <h4>Comments: </h4>

      <button className='add-comments' onClick={openForm}>Add Comments</button>

      {/* Dialog (Modal) */}
      {showModal && (
        <div className="modal-overlay">
          <dialog className='modal' open={showModal}>
            <form onSubmit={AddComment}>
              <input required type="text" placeholder='your comments' />
              <input required type="text" placeholder='your fullname' />
              <button type='submit'>Add Comment</button>
            </form>
            <button className='cancel-btn' type='button' onClick={closeDialog}>Cancel</button>
          </dialog>
        </div>
      )}

      {comments.map(
        (x) => (
          <p key={x.id}>
            <strong>{x.user.fullName}</strong> says: {x.body}
          </p>
        )
      )}

      {newAddedComments &&
        newAddedComments.map((x) => (
          <p key={x.id}>
            <strong>{x.fullName}</strong> says: {x.comment}
          </p>
        ))}
    </>
  );
}




function NotFound() {
  return (
    <p>Page not found. <a href="#/">return home</a></p>
  )
}

export default App



