import {useState} from 'react'

function GameForm({gameList, setGameList, setSelected}) {
  const [form,setForm]= useState({
    name:"",
    genre:"",
    developer:"",
    platform:"",
    description:"",
    release:"",
    image:null,
  })


  function handleSubmit(e){
    e.preventDefault()
    const{name,genre,developer,platform,description,release,image} = form
    const newGame ={
      name,
      genre,
      developer,
      platform,
      description,
      release,
    }
    if (image)
      newGame.image = image
  createGame(newGame).then(data => setGameList([...gameList, data])).then(setSelected(1))
  

  }

  async function createGame(gameBody){
    const data = await fetch(`http://localhost:9292/games`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accepts: "application/json"
      },
      body: JSON.stringify(gameBody)
      })
      
      return data.json()
      
  }


  return (
  
  <div>gameForm 
  <form actions="/posts" method="post" onSubmit={handleSubmit} >
  <fieldset>
        <label>
          <p>Game Name</p>
          <input onChange={(e)=>setForm({...form,name: e.target.value})} name="name" />
          <p>Genre</p>
          <input genre="genre" onChange={(e)=>setForm({...form,genre: e.target.value})} />
          <p>Platform</p>
          <input  platform="platform" onChange={(e)=>setForm({...form,platform: e.target.value})}/>
          <p>Release</p>
          <input release="release" onChange={(e)=>setForm({...form,release: e.target.value})}/>
          <p>Developer</p>
          <input developer="developer" onChange={(e)=>setForm({...form,developer: e.target.value})}/>
          <p>Description</p>
          <input description="description" onChange={(e)=>setForm({...form,description: e.target.value})}/>
          <p>Image</p>
          <input image="image" onChange={(e)=>setForm({...form,image: e.target.value})}/>
        </label>
  </fieldset>
      <button type="submit">Submit</button>
  </form>
  </div>
  
  )
}

export default GameForm;
