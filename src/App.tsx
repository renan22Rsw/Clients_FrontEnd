import { FiTrash } from "react-icons/fi";
import { useEffect, useState, useRef, FormEvent } from "react";
import { api } from "./services/api";

interface CustomersProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export const App = () => {
  const [customers, setCustomers] = useState<CustomersProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = api.get("/customers");
    setCustomers((await response).data);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!nameRef.current?.value || !emailRef.current?.value) return;

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
    });

    console.log(response.data);
  };

  return (
    <div className="w-full min-h-screen bg-[#020617] flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clients</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Name:</label>
          <input
            type="text"
            placeholder="type your name..."
            className="w-full mb-5 p-2 rounded"
            ref={nameRef}
          />

          <label className="font-medium text-white">Email:</label>
          <input
            type="email"
            placeholder="type your email..."
            className="w-full mb-5 p-2 rounded"
            ref={emailRef}
          />

          <input
            type="submit"
            value="Cadaster"
            className="cursor-pointer w-full p-2 bg-[#581c87] rounded font-bold text-white"
          />
        </form>

        <section className="flex flex-col gap-4">
          {customers.map((customer) => (
            <article
              className="w-full bg-white rounded p-2 relative hover:scale-105 duration-300"
              key={customer.id}
            >
              <p>
                <span className="font-medium ">Nome:</span> {customer.name}
              </p>
              <p>
                <span className="font-medium">email:</span> {customer.email}
              </p>

              <p>
                <span className="font-medium">status:</span>{" "}
                {customer.status ? "online" : "offiline"}
              </p>

              <button className="w-7 h-7 bg-red-600 flex justify-center items-center rounded-lg absolute right-0 -top-2">
                <FiTrash size={18} color="#fff" />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};
