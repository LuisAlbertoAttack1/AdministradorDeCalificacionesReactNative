import { useState } from "react";

export const useForm = (estadoInicial) => {
  const [descripcion, setDescripcion] = useState(estadoInicial);

  const handleInputChange = (nuevoValor) => {
    setDescripcion(nuevoValor);
  };

  return [descripcion, handleInputChange, setDescripcion];
};