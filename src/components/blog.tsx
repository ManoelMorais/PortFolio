import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <header className="p-5 bg-sky-950 text-white font-bold">
        <div>
          <Link to="/">back to PortFólio✨</Link>
        </div>
      </header>
      <section>
        <div className="flex gap-5 italic p-1 justify-center">
          <h2>Um pouco do meu dia a dia👍</h2>
          <h2>A bit of my day to day👍</h2>
          <h2>Un poco de mi día a día👍</h2>
          <h2>Un po' della mia giornata👍</h2>
        </div>
      </section>
      <section className="flex flex-col p-5">
        <h2 className="font-bold">Dia 01/09/2023</h2>
        <h2>Quando tudo começou</h2>
        <p className="my-5">
          Hoje a minha manhã foi um dia produtivo. Fiz uma meta de fazer um mês perfeito, Logo acordei às 5:30, tomei
          café e fui fazer exercícios e tomar banho. A aula de inglês foi feita
          com sucesso. Depois, comecei um curso da Udemy muito bom. Ele é de JS,
          TS e Node. Gostei mesmo, ajudou a abrir minha mente para umas coisas e
          me motivou a criar esse blog, terminei um projeto do cruso Dev Samurai. Criei esse blog e pronto. Minha manhã foi essa. Agora vou almoçar
          e jogar CS até às 13:30 e depois voltar a estudar. E essa e minha manhã para um mês perfeito.
        </p>
      </section>
    </>
  );
}
