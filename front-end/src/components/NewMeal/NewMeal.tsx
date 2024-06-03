import { ArrowLeft } from 'phosphor-react';
import { Input } from '../Commons/Input';
import { Label } from '../Commons/Label';
import statusGreen from '../../assets/status-green.png';
import statusRed from '../../assets/status-red.png';

export function NewMeal() {
  return (
    <main>
      <section className="flex justify-center items-center p-6 bg-base-gray-500 relative">
        <ArrowLeft size={27} className="absolute left-3 top-7" />
        <h1 className="text-xl text-base-gray-100 font-bold">Nova refeição</h1>
      </section>

      <section className="bg-base-gray-500">
        <form
          action="#"
          className="flex flex-col justify-center gap-3 mx-auto p-5  bg-white rounded-t-2xl font-semibold text-base-gray-100"
        >
          <div className="flex flex-col">
            <Label htmlFor="name" value="Nome" />
            <Input type="text" id="name" />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="description" value="Descrição" />
            <textarea
              id="description"
              className="border-[1px] rounded-md p-3 border-base-gray-500"
            ></textarea>
          </div>

          <div className="flex flex-row gap-4">
            <span>
              <Label htmlFor="data" value="Data" />
              <Input type="date" id="data" className="w-[165px]" />
            </span>

            <span>
              <Label htmlFor="hour" value="Hora" />
              <Input type="time" id="hour" className="w-[165px]" />
            </span>
          </div>

          <div className="flex flex-col">
            <p>Está dentro da dieta?</p>
            <span className="flex flex-row items-center justify-center gap-7">
              <button
                type="button"
                className="flex flex-row items-center gap-2 justify-center w-56 bg-base-gray-600 p-4 rounded-md text-sm border-2 border-transparent focus:border-green-dark focus:bg-green-ligth"
              >
                <img src={statusGreen} className="w-2" /> Sim
              </button>
              <button
                type="button"
                className="flex flex-row items-center gap-2 justify-center w-56 bg-base-gray-600 p-4 rounded-md text-sm border-2 border-transparent focus:border-green-dark focus:bg-green-ligth"
              >
                <img src={statusRed} className="w-2" /> Não
              </button>
            </span>
          </div>

          <div>
            <button></button>
          </div>
        </form>
      </section>
    </main>
  );
}
