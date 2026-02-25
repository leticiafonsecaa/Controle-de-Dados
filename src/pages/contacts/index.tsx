import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactsSchema, type ContactsFormType } from "../../schemas/ContactsSchema.ts"

interface IContato extends ContactsFormType {
  id: string
}

export function Contato() {
  const [contatos, setContatos] = useState<IContato[]>(() => {
    const dados = localStorage.getItem("contatos")
    return dados ? JSON.parse(dados) : []
  })

  const formulario = useForm<ContactsFormType>({
    resolver: zodResolver(contactsSchema)
  })

  useEffect(() => {
    localStorage.setItem("contatos", JSON.stringify(contatos))
  }, [contatos])

  function enviaFormulario(data: ContactsFormType) {
    const novoContato: IContato = {
      id: crypto.randomUUID(),
      ...data
    }

    setContatos((old) => [...old, novoContato])
    formulario.reset()
  }

  function removerContato(id: string) {
    setContatos((old) => old.filter((c) => c.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-6">

      <div className="max-w-3xl mx-auto">

        <NavLink to="/" className="text-lg text-[#8B5E3C] hover:underline">
          ← Voltar
        </NavLink>

        <h1 className="text-4xl font-bold text-[#8B5E3C] mt-4 mb-6">
          📇 Contatos
        </h1>

        <form
          onSubmit={formulario.handleSubmit(enviaFormulario)}
          noValidate
          className="w-full bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="grid grid-cols-12 gap-4">

            <div className="col-span-12 flex flex-col py-1 relative">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Nome Completo
              </label>

              <input
                type="text"
                {...formulario.register("nome")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA05B] transition"
              />

              {formulario.formState.errors.nome && (
                <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">
                  {formulario.formState.errors.nome.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Email
              </label>

              <input
                type="email"
                {...formulario.register("email")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA05B] transition"
              />

              {formulario.formState.errors.email && (
                <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">
                  {formulario.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1 relative">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Telefone
              </label>

              <input
                type="text"
                maxLength={11}
                {...formulario.register("telefone")}
                onChange={(e) =>
                  e.target.value = e.target.value.replace(/\D/g, "")
                }
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA05B] transition"
              />

              {formulario.formState.errors.telefone && (
                <p className="text-red-500 text-xs mt-1 absolute -bottom-3 left-0">
                  {formulario.formState.errors.telefone.message}
                </p>
              )}
            </div>

          </div>

          <div className="flex gap-4 mt-6 justify-end">
            <button type="reset" onClick={() => formulario.reset()} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium">
              Limpar
            </button>

            <button type="submit" className="px-6 py-2 bg-[#8B5E3C] text-white rounded-md hover:bg-[#744a2f] transition font-medium">
              Salvar
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-3">
          {contatos.map((contato) => (
            <div key={contato.id} className="bg-white rounded-xl shadow-sm px-4 py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-[#4A3F35]">
                  {contato.nome}
                </p>
                <p className="text-xs text-gray-500">
                  {contato.email}
                </p>
                <p className="text-xs text-gray-500">
                  {contato.telefone}
                </p>
              </div>

              <button onClick={() => removerContato(contato.id)} className="hover:scale-110 transition">
                🗑️
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}