import { NavBtn } from "../components/Components";

export const NotFound = () => {
    return (
      <div>
        <h1>Pagina non trovata o inesistente</h1>
        <p>Puoi tornare alla schermata principale del sito cliccando sul bottone che trovi qui:</p>
        <NavBtn to="" desc="Home" />
      </div>
    )
  }