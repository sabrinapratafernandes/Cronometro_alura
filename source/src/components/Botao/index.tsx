import React, { Children, PropsWithChildren } from "react";
import { addSyntheticLeadingComment } from "typescript";
import style from './Botao.module.scss';

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}


function Botao({ onClick, type, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}>

      {children}

    </button>
  );
}

export default Botao;



