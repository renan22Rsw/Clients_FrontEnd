export const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#020617] flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clients</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Name:</label>
          <input
            type="text"
            placeholder="type your name..."
            className="w-full mb-5 p-2 rounded"
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="type your email..."
            className="w-full mb-5 p-2 rounded"
          />

          <input
            type="submit"
            value="Cadaster"
            className="cursor-pointer w-full p-2 bg-[#581c87] rounded font-bold text-white"
          />
        </form>

        <section className="flex flex-col">
          <article className="w-full bg-white rounded p-2">
            <p>
              <span className="font-medium ">Nome:</span> Renan
            </p>
            <p>
              <span className="font-medium">email:</span> renan@gmail.com
            </p>

            <p>
              <span className="font-medium">status:</span> online
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};
