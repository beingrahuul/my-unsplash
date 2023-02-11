import { useRef, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/SVG/Logo.svg'


const Container = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(63, 63, 63, 0.484);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  margin-top: 36px;
  font-size: 20px;
  font-weight: 800;
  line-height: 27px;
  letter-spacing: -0.035em;
`

const Para = styled.p`
  font-size: ${props => props.font ? props.font : "12px"};
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.035em;
  margin-bottom: 20px;
  color: ${props => props.color ? props.color : "#000000"};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

`

const Drag = styled.div`
  height: 318px;
  width: 438px;
  border-radius: 12px;
  background: #F6F8FB;
  border: 1px dashed #97BEF4;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  margin: 36px 0px 18px 0px;
  width: 214.13px;
  height: 188.24px;
  cursor: pointer;
`

const Preview = styled.img`
  margin: 36px 0px 18px 0px;
  width: 214.13px;
  height: 188.24px;
  object-fit: cover;
`

const Button = styled.button`
  flex: 1;
  height: 32px;
  font-size: 12px;
  background: #2F80ED;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
const LoaderContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Loader = styled.div`

  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
  position: absolute;
  border: 4px solid #232323;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

const Name = styled.input`
  height: 20px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  padding: 5px;
`

const Drop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #49494951;
  font-size: 34px;
  color: #ffffff;
  font-weight: 700;
  border-radius: 12px;

`

const FormCard = () => {

  const [form, setForm] = useState({
    name: "",
    image: undefined
  })
  const [loading, SetLoading] = useState(false)
  const [result, SetResult] = useState(null)
  const [drag, setDrag] = useState(false)

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click();
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    try{
      SetLoading(true);
      const data =  await convertBase64(form.image);
      const body = JSON.stringify({name: form.name, data: data});
      const response  = await fetch("https://image-uploader-x8mr.onrender.com/api/v1/upload", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })

      const temp = await response.json()
      console.log(temp)
    }catch(err){
      console.log(err)
    }finally{
      SetLoading(false);
    }
    
  }

  const handleChange = (e) => {
    if (e.target.name === "image"){
      const fileUploaded = e.target.files[0];
      setForm({...form, [e.target.name]:fileUploaded})
    }else{
      setForm({...form, [e.target.name]:e.target.value})
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const fileUploaded = e.dataTransfer.files[0];
    if (fileUploaded.type == 'image/jpeg' || fileUploaded.type == 'image/png'){    
      setForm({...form, "image":fileUploaded})
      setDrag(false)
    }else{
      alert("Invalid file type");
      setDrag(false)
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(false);
  }

  return (
    <Container>
      {!loading &&  <>
        <Heading>Upload your image</Heading>
        <Para>File should be Jpeg, Png...</Para>
        <Drag onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave}>
          {!drag ? (<>
            {form.image ? <Preview src={URL.createObjectURL(form.image)} /> : <Image src={Logo} onClick={handleClick}/>}
            <Para color={'#BDBDBD'} font={'16px'}>Drag & Drop your image here</Para>
          </>
          ) : (
            <Drop>Drop</Drop>
          )}
          
        </Drag>
        <Para color={'#BDBDBD'} font={'16px'}>Or</Para>
        <Form>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg" 
            name='image'
            onChange={handleChange}
            ref={hiddenFileInput}
            style={{display: 'none'}}
          />
          <Name
            type="text"
            name='name'
            required
            placeholder='Your Name'
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button onClick={handleClick}>{form.image ? "Change file" : "Choose a image"}</Button>
            {form.image && <Button onClick={handleUpload}>Uplaod</Button>}
          </ButtonContainer>
        </Form>
      </>}
      {loading &&
        <LoaderContainer>
          <Loader><div></div><div></div></Loader>
        </LoaderContainer>
      }
       
    </Container>
  )
}

export default FormCard