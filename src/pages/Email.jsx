import React, { useState } from "react";
import { CopyBtn, Navbar, Warning } from "../components/Components";

const characters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";

const getCharacters = () => {
  let chara = "";
  for(let i = 0; i < 5; i++){
    const randomIndex = Math.floor(Math.random() * characters.length);
    chara += characters[randomIndex];
 }
 return chara
}
const getNumbers = () => {
  let nums = "";
  for(let i = 0; i < 3; i++){
    const randomIndex = Math.floor(Math.random() * numbers.length);
    nums += numbers[randomIndex];
 }
 return nums
}
const getEmail = () => {
  let email = "";
  let firstCharas = getCharacters();
  let secondCharas = getCharacters();
  let numbers = getNumbers();

  email += firstCharas + "." + secondCharas + numbers;
  return email
}

export const Email = () => {
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("@gmail.com");
  const [prompt, setPrompt] = useState("Genera E-mail");
  const newEmail = email + domain
  
  const changeEmail = () => {
    setEmail(getEmail);
    setPrompt("Genera un'altra E-mail");
  }

  const selectChange = (e) => {
    setDomain(e.target.value)
  }

    return (
    <div className="page">
      <section className="card">
        <Navbar toPassword="/password" />
        <div className="domain">
          <label>Scegli un dominio: </label>
          <select value={domain} onChange={selectChange} id="select">
            <option value="@gmail.com">Google Mail - @gmail.com</option>
            <option value="@hotmail.com">Microsoft Hotmail - @hotmail.com </option>
            <option value="@yahoo.com">Yahoo Mail - @yahoo.com </option>
            <option value="@outlook.com">Microsoft Outlook - @outlook.com </option>
            <option value="@aol.com">America Online - @aol.com </option>
            <option value="@icloud.com">Apple iCloud - @icloud.com </option>
            <option value="@tim.it">Tim Mail - @tim.it </option>
            <option value="@libero.it">Libero Mail - @libero.it </option>
            <option value="@virgilio.it">Virgilio Mail - @virgilio.it </option>
            <option value="@tiscali.it">Tiscali Mail - @tiscali.it </option>
            <option value="@alice.it">Alice Mail - @alice.it </option>
            <option value="@fastwebnet.it">Fastweb Mail - @fastwebnet.it </option>
            <option value="@vodafone.it">Vodafone Mail - @vodafone.it </option>
            <option value="@aruba.it">Aruba Mail - @aruba.it </option>
          </select>
        </div>
        <button className="generate-btn" onClick={changeEmail}>{prompt}</button>
        {
          email && 
          <div className="reveal">
            <span>Ecco la tua E-mail:</span>
            <div className="result">
              <p className="data">{newEmail}</p>
              <CopyBtn target={newEmail} element="E-mail" />
            </div>
          </div>  
        }
      </section>
      <Warning />
    </div>
        
    )
  }