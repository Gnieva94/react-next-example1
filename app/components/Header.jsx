'use client'
import { staticPageGenerationTimeout } from '@/next.config'
import { useEffect, useState } from 'react'
//FORMA MODERNA.
// const Header = () => {
//     return (
//         <header>
//             <h1>Header</h1>
//         </header>
//     )
// }
// export default Header

export default function Header() {
  const [nombre, setNombre] = useState("")
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    const cargarData = async () => {
      const response = await fetch("./data/persona.json")
      const data = await response.json()
      console.log(data)

      setNombre(data.nombre)
      setAvatar(data.avatar)
    }
    cargarData()
  }, [])


  return (
    <header>
      <img src={avatar} alt="" />
      <h1>{nombre}</h1>
    </header>
  )
}
