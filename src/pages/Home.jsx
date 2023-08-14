import React from "react";
import { NavBtn } from "../components/Components";

export const Home = () => {
    return (
      <div className="page">
        <section className="card">
          <h1>E-mail and Password Generator</h1>
          <p className="home-hero">Non vuoi utilizzare il tuo indirizzo <b>E-mail personale</b> in siti che non conosci? Oppure hai bisogno di una <b>E-mail temporanea</b>? In questa applicazione ne potrai generare una casuale e sicura! E parlando di sicurezza, hai necessità di una <b>password sicura</b> per il tuo account o per i tuoi servizi? Sempre in questa applicazione potrai generarne una in <b>pochi click!</b></p>
          <section className="buttons">
            <NavBtn to="email" desc="Genera la tua E-mail" />
            <NavBtn to="password" desc="Genera la tua Password" />
          </section>
        </section>
      </div>
    )
    }