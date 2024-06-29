import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImjxQ2Hw_dr6WU0_mBQWIhSWhxRFzbKCL3Q&s" alt="" />
            <p>Welcome to The Healing Journey, a blog dedicated to providing a safe and supportive space for those on the path to mental health recovery. Here, we share stories of resilience, offer resources for support, and explore topics related to healing and self-discovery. Whether you're seeking guidance, solidarity, or simply a place to be heard, you'll find a community that understands and cares. Join us as we navigate the ups and downs of the recovery journey together, one step at a time.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
           <ul className="sidebarList">
            <li className="sidebarListItem">Anxiety</li>
            <li className="sidebarListItem">Eating Disorders</li>
            <li className="sidebarListItem">Depression</li>
            <li className="sidebarListItem">Addiction</li>
            <li className="sidebarListItem">Trauma</li>
            <li className="sidebarListItem">Others</li>
           </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
      </div>
      
   
  );
}
