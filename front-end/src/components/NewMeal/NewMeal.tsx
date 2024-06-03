import { ArrowLeft } from 'phosphor-react';
import { Input } from '../Commons/Input';
import { Label } from '../Commons/Label';
import statusGreen from '../../assets/status-green.png';
import statusRed from '../../assets/status-red.png';
import axios from 'axios';
import { useState } from 'react';

export function NewMeal() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    data: '',
    hour: '',
    inDiet: null,
  });

  function getInfoDiet(e, formData) {
    e.preventDefault();

    console.log(formData);
    axios.post('http://localhost:3333/diets', formData);
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    console.log(formData.name);
  }

  function handleDietChange(inDiet) {
    setFormData({ ...formData, inDiet });
  }

  return (
    <main>
      <section className="flex justify-center items-center p-6 bg-base-gray-500 relative">
        <ArrowLeft size={27} className="absolute left-3 top-7" />
        <h1 className="text-xl text-base-gray-100 font-bold">Nova refeição</h1>
      </section>

      <section className="bg-base-gray-500">
        <form
          onSubmit={getInfoDiet}
          action="#"
          className="flex flex-col justify-center gap-3 mx-auto p-5  bg-white rounded-t-2xl font-semibold text-base-gray-100"
        >
          <div className="flex flex-col">
            <Label htmlFor="name" value="Nome" />
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="description" value="Descrição" />
            <textarea
              id="description"
              className="border-[1px] rounded-md p-3 border-base-gray-500"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex flex-row gap-4">
            <span>
              <Label htmlFor="data" value="Data" />
              <Input
                type="date"
                id="data"
                className="w-[165px]"
                value={formData.data}
                onChange={handleInputChange}
              />
            </span>

            <span>
              <Label htmlFor="hour" value="Hora" />
              <Input
                type="time"
                id="hour"
                className="w-[165px]"
                value={formData.hour}
                onChange={handleInputChange}
              />
            </span>
          </div>

          <div className="flex flex-col">
            <p>Está dentro da dieta?</p>
            <span className="flex flex-row items-center justify-center gap-7">
              <button
                type="button"
                className={`flex flex-row items-center gap-2 justify-center w-56 p-4 rounded-md text-sm ${
                  formData.inDiet === true
                    ? ' border-2 bg-green-ligth border-green-dark '
                    : 'bg-base-gray-600 border-transparent'
                }`}
                onClick={() => {
                  handleDietChange(true);
                }}
              >
                <img src={statusGreen} className="w-2" /> Sim
              </button>

              <button
                type="button"
                className={`flex flex-row items-center gap-2 justify-center w-56 bg-base-gray-600 p-4 rounded-md text-sm ${
                  formData.inDiet === false
                    ? 'border-2 border-red-900 bg-red-200'
                    : 'bg-base-gray-600 border-transparent'
                } `}
                onClick={() => {
                  handleDietChange(false);
                }}
              >
                <img src={statusRed} className="w-2" /> Não
              </button>
            </span>
          </div>

          <div>
            <button className="flex items-center justify-center w-full px-6 py-4 bg-base-gray text-white rounded-md gap-3 cursor-pointer mt-11">
              Cadastrar refeição
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
