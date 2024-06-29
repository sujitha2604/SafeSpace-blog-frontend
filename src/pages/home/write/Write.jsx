import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-eF2EPE0vA6B9cNIfTX_lnizV3OGwTdADaA&s" alt=""
        className="writeImg" />
      <form  className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"> </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
