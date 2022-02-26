import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  function CalcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Você está abaixo do peso! Seu IMC:  " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem("Você está com sobrepeso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem("Você está com obesidade grau 1! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 35 && imc <= 39.9) {
      setMensagem("Você está com obesidade grau 2 " + imc.toFixed(2));
    } else if (imc >= 40) {
      setMensagem("Você está com obesidade grau 3 " + imc.toFixed(2));
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex:90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex:180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={CalcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  );
}
