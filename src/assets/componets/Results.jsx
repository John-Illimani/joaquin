import React from "react";

export const Resultados = ({ results }) => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-green-500 p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado LDC:</label>
        <span className="text-blue-500">{results.ldc}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado MDLDC:</label>
        <span className="text-blue-500">{results.mdldc}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado EN:</label>
        <span className="text-blue-500">{results.en}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado TDSW:</label>
        <span className="text-blue-500">{results.tdsw}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado PN:</label>
        <span className="text-blue-500">{results.pn}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado EP:</label>
        <span className="text-blue-500">{results.ep}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold">Resultado EC:</label>
        <span className="text-blue-500">{results.ec}</span>
      </div>
      <div>
        <label className="block text-sm font-semibold">Resultado CLDCBS:</label>
        <span className="text-blue-500">{results.cldcbs}</span>
      </div>
    </div>
  );
};
