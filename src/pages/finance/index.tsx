import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { schemaFinance, type FinanceFormData } from "../../schemas/FinanceSchema"


interface IRegistro extends FinanceFormData {
  id: string
}

export function Finance() {
  const [registros, setRegistros] = useState<IRegistro[]>(() => {
  try {
    const dadosSalvos = localStorage.getItem("capy-finance")
    return dadosSalvos ? JSON.parse(dadosSalvos) : []
  } catch {
    return []
  }
})

  const form = useForm<FinanceFormData>({
    resolver: zodResolver(schemaFinance),
    defaultValues: {
      tipo: "entrada"
    }
  })

  useEffect(() => {
    localStorage.setItem("capy-finance", JSON.stringify(registros))
  }, [registros])

  function handleSubmitFinance(data: FinanceFormData) {
    const novoRegistro: IRegistro = {
      id: crypto.randomUUID(),
      ...data
    }

    setRegistros((prev) => [...prev, novoRegistro])
    form.reset({ tipo: "entrada" })
  }

  function removerRegistro(id: string) {
    setRegistros((prev) =>
      prev.filter((registro) => registro.id !== id)
    )
  }

  const saldoTotal = useMemo(() => {
    return registros.reduce((acc, item) => {
      if (item.tipo === "entrada") {
        return acc + item.valor
      }
      return acc - item.valor
    }, 0)
  }, [registros])

  return (
    <div className="min-h-screen bg-[#F5EFE6] p-6">
      <div className="max-w-3xl mx-auto">

        <NavLink
          to="/"
          className="text-lg text-[#8B5E3C] hover:underline"
        >
          ← Voltar
        </NavLink>

        <h1 className="text-4xl font-bold text-[#8B5E3C] mt-4 mb-6">
          💰 Controle de Gastos
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 text-center">
          <p className="text-lg text-gray-500">Saldo Total</p>
          <p
            className={`text-3xl font-bold ${
              saldoTotal >= 0
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            R$ {saldoTotal.toFixed(2)}
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(handleSubmitFinance)}
          noValidate
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <div className="grid grid-cols-12 gap-4">

            <div className="col-span-12 flex flex-col">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Descrição
              </label>

              <input
                type="text"
                {...form.register("descricao")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
              />

              {form.formState.errors.descricao && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.descricao.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Valor
              </label>

              <input
                type="number"
                step="0.01"
                {...form.register("valor", { valueAsNumber: true })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
              />

              {form.formState.errors.valor && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.valor.message}
                </p>
              )}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label className="text-lg font-medium text-[#4A3F35] mb-1">
                Tipo
              </label>

              <select
                {...form.register("tipo")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8B5E3C] outline-none"
              >
                <option value="entrada">🟢 Entrada</option>
                <option value="saida">🔴 Saída</option>
              </select>
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <button type="submit"className="px-6 py-2 bg-[#8B5E3C] text-white rounded-md hover:bg-[#744a2f] transition font-medium">
              Registrar
            </button>
          </div>
        </form>

        <div className="mt-8 space-y-3">
          {registros.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm px-4 py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-[#4A3F35]">
                  {item.descricao}
                </p>
                <p className="text-xs text-gray-500">
                  {item.tipo === "entrada" ? "Entrada" : "Saída"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`font-semibold ${
                    item.tipo === "entrada"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.tipo === "entrada" ? "+" : "-"} R$ {item.valor.toFixed(2)}
                </span>

                <button onClick={() => removerRegistro(item.id)} className="text-lg hover:scale-110 transition">
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