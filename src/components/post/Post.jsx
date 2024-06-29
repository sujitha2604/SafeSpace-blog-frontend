import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img  className="postImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Anxiety</span>
            <span className="postCat">Eating Disorder</span>
        </div>
        <span className="postTitle">
            My Mental Health Story
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">I have struggled with an eating disorder and anxiety for most of my teen and adult life. I was formally diagnosed (otherwise known as the time it became too obvious to hide from my parents and doctor) with anorexia nervosa and generalized anxiety disorder at the beginning of my junior year of high school. Under the careful care of my parents and my treatment team, I was able to keep things ~mostly~ under control. I stayed in school, continued playing sports, and participated in extracurricular activities. </p>
    </div>
  )
}
