import React from 'react'
import Input from './Input'

export default function Caluladora() {
  return (
    <main>
      <article className='calculadora'>
        <h1>Calculadora | Média Final</h1>
        <Input classe='disciplina' placeholder='Disciplina'/>
        <div className='notas'>
          <Input placeholder='Média AVA' classe='ava'/>
          <Input placeholder='Prova Regular' classe='prova' />
        </div>
        <button>ENVIAR</button>
      </article>
    </main>
  )
}
