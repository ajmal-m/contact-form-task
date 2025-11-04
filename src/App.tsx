import { useCallback, useState } from 'react'
import './App.css';
import { addData } from './config/api';

function App() {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string}>({
    name:"",
    email:"",
    message:""
  });


  const updateFormData = useCallback(( e :  { target: { name : string; value : string}}) => {
    const {name , value} = e.target;
    const newFormData = { ...formData, [name]: value}
    setFormData(newFormData)
  },[formData]);


  const handleSubmit = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(formData);
    await addData(formData)
  }, [formData])

  return (
    <>
     <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={(e) => updateFormData(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={(e) => updateFormData(e)} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" value={formData.message} onChange={(e) => updateFormData(e)}></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
     </div>
    </>
  )
}

export default App
