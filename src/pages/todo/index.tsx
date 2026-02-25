import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { todoSchema, type TodoFormData } from "../../schemas/TodoSchema.ts"

interface Tarefa extends TodoFormData {
  id: number
  concluida: boolean
}

export function ToDo() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")

    console.log(tarefasSalvas)

    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })

  const form = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      categoria: "Pessoal"
    }
  })

  const { register, handleSubmit, formState: { errors }, reset } = form

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  function onSubmit(data: TodoFormData) {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      titulo: data.titulo,
      categoria: data.categoria,
      concluida: false
    }

    setTarefas(prev => [...prev, novaTarefa])
    reset({ categoria: "Pessoal" })
  }

  function removerTarefa(id: number) {
    setTarefas(prev => prev.filter(t => t.id !== id))
  }

  function alternarConclusao(id: number) {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    )
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-6">
      <div className="max-w-3xl mx-auto">

        <NavLink to="/" className="text-lg text-[#8B5E3C] hover:underline">
          ← Voltar
        </NavLink>

        <h1 className="text-4xl font-bold text-[#8B5E3C] mt-4 mb-6">
          📋 Tarefas
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="grid grid-cols-12 gap-4">

            <div className="col-span-12 flex flex-col py-1">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Título
              </label>

              <input
                type="text"
                {...register("titulo")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] transition"
              />

              {errors.titulo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.titulo.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col py-1">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Categoria
              </label>

              <select
                {...register("categoria")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] transition"
              >
                <option value="Pessoal">🌿 Pessoal</option>
                <option value="Trabalho">💼 Trabalho</option>
                <option value="Urgente">🔥 Urgente</option>
              </select>
            </div>

          </div>

          <div className="flex gap-4 mt-6 justify-end">
            <button
              type="reset"
              onClick={() => reset({ categoria: "Trabalho" })}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium"
            >
              Limpar
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-[#8B5E3C] text-white rounded-md hover:bg-[#744a2f] transition font-medium"
            >
              Adicionar
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-3">
          {tarefas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="bg-white rounded-xl shadow-sm px-4 py-3 flex justify-between items-center"
            >
              <div>
                <p
                  className={`font-medium ${tarefa.concluida
                      ? "line-through text-gray-400"
                      : "text-[#4A3F35]"
                    }`}
                >
                  {tarefa.titulo}
                </p>
                <p className="text-xs text-gray-500">
                  {tarefa.categoria}
                </p>
              </div>

              <div className="flex gap-3 text-lg">
                <button
                  onClick={() => alternarConclusao(tarefa.id)}
                  className="hover:scale-110 transition"
                >
                  {tarefa.concluida ? "☑️" : "⬜"}
                </button>

                <button
                  onClick={() => removerTarefa(tarefa.id)}
                  className="hover:scale-110 transition"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}