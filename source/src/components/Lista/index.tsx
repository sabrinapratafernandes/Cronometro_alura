import React, { useCallback, useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefas';

interface Props {
  tarefas: ITarefa[],
  addTarefa?: () => void,
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ addTarefa, tarefas, selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={addTarefa} > Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}

          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;

