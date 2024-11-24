// ---Dependencys
import { ReactElement } from 'react';

/**
 * HelloWorld Component : Componente simple que despliega un mensaje,
 * el environment en el que se esta trabajando y un string unico util para keys
 * @returns {ReactElement} ReactElement
 */
export function HelloWorld(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  console.log(import.meta.env);
  
  // -----------------------RENDER
  return (
    <>
      <p>
        Goodbye &nbsp;
        <span>{import.meta.env.VITE___APP_ENV__}</span>
      </p>
    </>
  );
}
