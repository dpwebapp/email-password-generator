import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const copyText = <span className="copy">Copia</span>
const copiedText = <span className="copied">Copiata!</span>

export const NavBtn = (props) => {
    return (
        <NavLink to={`/${props.to}`}><button className="nav-btn">{props.desc}</button></NavLink>
    )
}

export const Warning = () => {
    return(
        <p className="warning"><strong>Attenzione!  -&gt; </strong> <span>Questa applicazione non è provvista di un database per salvare i dati che fornisce, pertanto è consigliato segnarli altrove per evitare di perderli.</span></p>
    )
  }

  export const CopyBtn = (props) => {
    const [copied, isCopied] = useState(copyText);
    
    const copyContent = () => {
        navigator.clipboard.writeText(props.target);
        isCopied(copiedText);

        setTimeout(() => {
            isCopied(copyText)
        }, 2000)
    }    

    return(
        <>
            <button className="copy-btn" onClick={copyContent}>{copied}</button>
            
        </>
    )
  }

  export const Navbar = (props) => {
    return (
        <section className="navbar">
            <NavLink className="link email" to={props.toEmail}><h1>E-mail</h1></NavLink>
            <NavLink className="link password" to={props.toPassword}><h1>Password</h1></NavLink>
        </section>
    )
  }