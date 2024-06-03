import { ArrowLeft } from 'phosphor-react';

export function NewMeal() {
  return (
    <main>
      <section className="flex justify-center items-center p-8 bg-base-gray-500 relative">
        <ArrowLeft size={27} className="absolute left-3 top-9" />
        <h1 className="text-xl text-base-gray-100 font-bold">Nova refeição</h1>
      </section>

      <section>
        <form
          action="#"
          className="flex flex-col justify-center mx-auto max-w-[352px]"
        >
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="description">Descrição</label>
          <input type="text" id="description" />

          <label htmlFor="data">Data</label>
          <input type="text" id="data" />

          <label htmlFor="hour">Hora</label>
          <input type="text" id="hour" />

          <p>Está dentro da dieta?</p>
          <button type="button"></button>
          <button type="button"></button>
        </form>
      </section>
    </main>
  );
}
