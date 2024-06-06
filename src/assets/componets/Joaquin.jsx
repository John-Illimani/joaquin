import React, { useState } from "react";
import { Resultados } from "./Results";

export const Operaciones = () => {
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [ch, setCh] = useState("");
  const [organicoValue, setOrganicoValue] = useState(65);
  const [semiacopladoValue, setSemiacopladoValue] = useState(90);
  const [acopladoValue, setAcopladoValue] = useState(125);
  const [selectedRange, setSelectedRange] = useState(null);
  const [resultados, setResultados] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const datos = {
      entrada,
      salida,
      ch,
      organico: selectedRange === "organico" ? organicoValue : null,
      semiacoplado: selectedRange === "semiacoplado" ? semiacopladoValue : null,
      acoplado: selectedRange === "acoplado" ? acopladoValue : null,
    };
    const resultadosCalculados = Operaciones_2(datos);
    setResultados(resultadosCalculados);
  };

  return (
    <div className="bg-gradient-to-br  from-red-400 to-black">
      <div className="block text-center">
        <h1 className="text-6xl font-bold text-white tracking-wide shadow-lg bg-gradient-to-br from-blue-500 to-yellow-300 p-4 rounded-lg">
          COCOMO II
        </h1>
      </div><br />
      <div className="max-w-lg mx-auto bg-gradient-to-br from-blue-200 to-red-400 p-8 rounded-lg drop-shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="entrada"
              className="block text-sm font-semibold mb-2"
            >
              Entrada:
            </label>
            <input
              className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="number"
              name="entrada"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="salida"
              className="block text-sm font-semibold mb-2"
            >
              Salida:
            </label>
            <input
              className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="number"
              name="salida"
              value={salida}
              onChange={(e) => setSalida(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="ch" className="block text-sm font-semibold mb-2">
              Ch:
            </label>
            <input
              className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="number"
              name="ch"
              value={ch}
              onChange={(e) => setCh(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="organico"
              className="block text-sm font-semibold mb-2"
            >
              Orgánico
            </label>
            <input
              type="checkbox"
              name="organico"
              checked={selectedRange === "organico"}
              onChange={(e) => {
                if (e.target.checked) setSelectedRange("organico");
                else setSelectedRange(null);
              }}
              className="mr-2 cursor-pointer"
            />
            <input
              type="range"
              min="50"
              max="80"
              name="organico"
              value={organicoValue}
              onChange={(e) => setOrganicoValue(e.target.value)}
              className={`w-full ${
                selectedRange !== "organico"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={selectedRange !== "organico"}
            />
            <div className="text-center mt-2">{organicoValue}</div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="semiacoplado"
              className="block text-sm font-semibold mb-2"
            >
              Semi Acoplado
            </label>
            <input
              type="checkbox"
              name="semiacoplado"
              checked={selectedRange === "semiacoplado"}
              onChange={(e) => {
                if (e.target.checked) setSelectedRange("semiacoplado");
                else setSelectedRange(null);
              }}
              className="mr-2 cursor-pointer"
            />
            <input
              type="range"
              min="81"
              max="100"
              name="semiacoplado"
              value={semiacopladoValue}
              onChange={(e) => setSemiacopladoValue(e.target.value)}
              className={`w-full ${
                selectedRange !== "semiacoplado"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={selectedRange !== "semiacoplado"}
            />
            <div className="text-center mt-2">{semiacopladoValue}</div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="acoplado"
              className="block text-sm font-semibold mb-2"
            >
              Acoplado
            </label>
            <input
              type="checkbox"
              name="acoplado"
              checked={selectedRange === "acoplado"}
              onChange={(e) => {
                if (e.target.checked) setSelectedRange("acoplado");
                else setSelectedRange(null);
              }}
              className="mr-2 cursor-pointer"
            />
            <input
              type="range"
              min="101"
              max="150"
              name="acoplado"
              value={acopladoValue}
              onChange={(e) => setAcopladoValue(e.target.value)}
              className={`w-full ${
                selectedRange !== "acoplado"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={selectedRange !== "acoplado"}
            />
            <div className="text-center mt-2">{acopladoValue}</div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transform hover:scale-105"
          >
            Resolver
          </button>
        </form>
        <br />

        {resultados && <Resultados results={resultados} />}
      </div>
    </div>
  );
};

const Operaciones_2 = (datos) => {
  const entrada_2 = datos.entrada;
  const salida_2 = datos.salida;
  const ch_2 = datos.ch;
  const { organico, semiacoplado, acoplado } = datos;

  // Definimos el parámetro en función del checkbox seleccionado
  const parametro =
    organico !== null
      ? organico
      : semiacoplado !== null
      ? semiacoplado
      : acoplado;

  /* Realizar cálculos */
  const ldc = (parseInt(entrada_2) + parseInt(salida_2)) * parametro;
  const mdldc = ldc / 1000;
  const en = 3.2 * mdldc ** 1.05;
  const tdsw = 2.5 * en ** 0.38;
  const pn = en / tdsw;
  const ep = ldc / en;
  const ec = parseInt(ch_2) * en;
  const cldcbs = ec / ldc;

  /* Retornar los resultados */
  return { ldc, mdldc, en, tdsw, pn, ep, ec, cldcbs };
};
