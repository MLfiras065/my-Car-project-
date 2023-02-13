import React,{useState} from "react";

const ListCars = (props) => {
const [model, setModel] = useState("");
const[image,setImage]=useState('')
const [up,setUp]=useState(false)
const uploadImage=()=>{
  
  const formData = new FormData()
    formData.append('file',file)
    formData.append('upload_preset',"dgrmh7he5")
     axios.post('https://api.cloudinary.com/v1_1/dt7t7wjql/image/upload',formData)
     .then((res)=>setImage(res.data.secure_url))
     .catch(err=>console.log(err))
}
return(
  <div className="list">
    <label>Upload images</label>
        <input type="file"
        onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={uploadImage}>upload image</button>
        <img src={image} />
       <input type="text" placeholder="image.." onChange={(e)=>setImage(e.target.value)} value={image} />
   { props.item.name}
    {props.item.model}
    {props.item.description}
    {props.item.year} 
    <span onClick={() => props.remove(props.item._id)}>&#10006;</span>
    <span onClick={() => setUp(!up)}>&#9997;</span>
    {up && (<div> <input type='text'  onChange={(e=>setModel(e.target.value))}/>
    <button onClick={()=>{props.update(props.item._id,model),setUp(!up)}}>update &#9997; </button>
    </div>)
    }
 </div>
);
  }
export default ListCars;
