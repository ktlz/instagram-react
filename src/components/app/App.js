import './App.css';
import Post from '../post/Post'

function App() {
  return (
    <div className="app">

      {/* Header */}
      <div className="app__header">

        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
        
      </div>

      <Post 
        username="danylo_kostiuchenko" 
        caption="great_framework" 
        avatarUrl="https://www.brusselstimes.com/wp-content/uploads/2020/07/tiger.unsplash3.jpg" 
        imageUrl="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" 
      />

      <Post 
        username="__lkate" 
        caption="great_framework" 
        avatarUrl="https://www.brusselstimes.com/wp-content/uploads/2020/07/tiger.unsplash3.jpg" 
        imageUrl="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" 
      />

      <Post 
        username="sofiakt" 
        caption="great_framework" 
        avatarUrl="https://www.brusselstimes.com/wp-content/uploads/2020/07/tiger.unsplash3.jpg" 
        imageUrl="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg" 
      />    
    </div>
  );
}

export default App;
