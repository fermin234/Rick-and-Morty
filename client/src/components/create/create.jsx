import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacter } from "../../redux/actions";
import Card from "../card/card";
import s from './create.module.css'
import validate from "./validate";

const Create = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name: '',
    species: '',
    origin: '',
    image: `https://rickandmortyapi.com/api/character/avatar/19.jpeg`
  })

  const [errors, setErrors] = useState({})
  const character = useSelector(state => state.character)

  useEffect(() => {
    setErrors(validate(input))
  }, [input])

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function onHandleSubmit(e) {
    e.preventDefault()
    dispatch(createCharacter(input))
    setInput({
      name: '',
      species: '',
      origin: '',
      image: `https://rickandmortyapi.com/api/character/avatar/19.jpeg`
    })
    console.log(input)
  }

  return (
    <div className={s.div}>
      <h1 className={s.h1}>Crea tu personaje</h1>
      <form onSubmit={e => onHandleSubmit(e)} className={s.form} action="" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={e => onChangeInput(e)} />
        <label htmlFor="species">Especies:</label>
        <input type="text" name="species" onChange={e => onChangeInput(e)} />
        <label htmlFor="origin">Origen:</label>
        <input type="text" name="origin" onChange={e => onChangeInput(e)} />
        <label htmlFor="imagen">Imagen:</label>
        <input type="text" name="image" onChange={e => onChangeInput(e)} />
        <p>{character !== {} ? 'algo' : 'nada'}</p>
        <button type="submit"> submit</button>
      </form>
      <Card key={'4'} name={input.name} species={input.species} origin={input.origin} image={input.image} />
    </div>
  )
}

export default Create;