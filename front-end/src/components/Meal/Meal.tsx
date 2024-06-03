import { ArrowUpRight, Plus } from 'phosphor-react';

export function Meal() {
  return (
    <main className="flex flex-col p-5 mx-auto max-w-7xl font-nunito">
      <section className="bg-green-ligth px-4 py-10 rounded-xl relative">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-bold">00.00%</h1>
          <h2 className="text-lg">Você ainda não tem refeição registrada!</h2>
          <ArrowUpRight
            className="absolute top-4 right-3 text-green-dark font-bold"
            size={30}
          />
        </div>
      </section>

      <section className="flex flex-col mt-5 space-y-1">
        <h1 className="text-lg">Refeições</h1>
        <button className="flex items-center justify-center w-full px-6 py-4 bg-base-gray text-white rounded-lg gap-3 cursor-pointer">
          <Plus size={20} /> Nova refeição
        </button>
      </section>
    </main>
  );
}
