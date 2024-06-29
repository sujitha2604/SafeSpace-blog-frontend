import "./settings.css"

import Sidebar from "../../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
    <div className="settingsTitle">
      <span className="settingsUpdateTitle">
             Update Your Account
      </span>
      <span className="settingsDeleteTitle">
             Delete Account
      </span>
    </div>
    <form  className="settingsForm">
      <label >Profile Picture</label>
      <div className="settingsPP">
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzuGvSdLLmAgWiCTgUD-6-7GCA_t35cM4o7w3WQXq2w&s" alt=""></img>
      <label htmlFor="fileInput">
      <i className="settingsPPIcon fa-regular fa-user"></i>
      </label>
     <input type="file" id="fileInput" style={{display:"none"}} />
     
      </div>
      <label >Username</label>
      <input type="text" placeholder="Safak" />
      <label >Email</label>
      <input type="email" placeholder="safak@gmail.com" />
      <label >Password</label>
      <input type="password" />
      <button className="settingsSubmit">
         Update
      </button>
    </form>
    </div>
    
    
    
    
    <Sidebar/>
    </div>
  )
}
