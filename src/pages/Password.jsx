import React, { useState } from "react";
import { CopyBtn, Navbar, Warning } from "../components/Components";

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHILMNOPQRSTUVWXYZ1234567890";
const specialCharacters = "!$%&/?@#+-_*=%€";
const allCharacters = characters + specialCharacters;



export const Password = () => {
  const [prompt, setPrompt] = useState("Genera password");
  const [password, setPassword] = useState("");
  const [checked, isChecked] = useState(false);
  const [length, setLength] = useState(15);

  const promptChange = () => {
    setPrompt("Genera un'altra password")
  }

  const checkboxChange = (event) => {
    isChecked(event.target.checked)
  } 

  const lengthChange = (event) => {
    setLength(event.target.value)
  }
  
  
  const randomPassword = () => {

    const randomizer = (chara) => {
      let string = "";
      for(let i = 0; i < length; i++){
        const index = Math.floor(Math.random() * chara.length);
        string += chara[index]
      }
      return string
    }

    if(checked){
      setPassword(randomizer(allCharacters));
      setPrompt(promptChange);
    } else {
      setPassword(randomizer(characters));
      setPrompt(promptChange);
    }
  };

    
  return (
      <div className="page">
        <section className="card">
          <Navbar toEmail="/email" />
          <div className="pwd-length">
            <label for="length">Scegli la lunghezza: <span>{length}</span></label>
            <input type="range" min="8" max="36" id="length" value={length} onChange={lengthChange}/>
          </div>
          <div className="pwd-special-chara">
            <input type="checkbox" id="checkbox" checked={checked} onChange={checkboxChange}/>
            <label for="checkbox">Includi caratteri speciali</label>
          </div>
            <button className="generate-btn" onClick={randomPassword}>{prompt}</button> 
          {
            password &&
            <div className="reveal">
              <span>Ecco la tua password:</span>
              <div className="result">
                <p className="data">{password}</p>
                <CopyBtn target={password} element="Password" />
              </div>
            </div>
          }
        </section>  
        <Warning />   
      </div>
    )
  }