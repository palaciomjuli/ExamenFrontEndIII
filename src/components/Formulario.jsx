import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import Card from '../Card';
const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [banda, setBanda] = useState("")
    const [visible, setVisible] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre.length<3 && nombre.includes("") || banda.length<6){
            console.log('Por favor chequea que la información sea correcta');
            setVisible(false)
            return;
            

        }else{
            setVisible(true);
        }
    }
  return (
   <div>
   <form onSubmit={handleSubmit}>
        <div class ="mb-3">
                
                <input
                    class="form-control"
                    type='text'
                    placeholder='Ingresar tu Nombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <br></br>
            <div>
                
                <input
                class="form-control"
                    type='text'
                    placeholder='Ingresar tu grupo favorito de K-pop'
                    value={banda}
                    onChange={e=>setBanda(e.target.value)}
                />
            </div>
            <br></br>
            <input class ="btn btn-primary"
                type='submit'
                value="Enviar"
            />
    </form>
<div>
    {visible ? <Card nombre={nombre} banda={banda}/> : "Por favor chequea que la informacion sea correcta"} 
</div>
</div>
    )
}

export default Formulario