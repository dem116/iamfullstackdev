import { useState } from 'react';

const InputCreate = () => {
  const [inputValue, setInputValue] = useState(''); 
  const urlApi = 'http://localhost:3000/create'; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const payload = { title: inputValue };

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),  
      });

      if (response.ok) {
        alert('Tarea añadida con éxito'); 
        setInputValue(''); 
      } 

    } catch (error) {
      console.error('Hubo un error al enviar la tarea:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InputCreate;