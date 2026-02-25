import { NavLink } from "react-router-dom";

export function Home() {
    return (
        <div className="h-screen overflow-x-hidden bg-[#F5EFE6]  flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-bold text-[#8B5E3C] mb-2">CapyBoard</h1>

            <p className="text-[#6B4F3A] mb-10 text-2xl text-center ">Gerencie tarefas, contatos e finanças de forma simples e eficiente.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-4/5 h-48">
                <NavLink to="/todo" className="bg-[#8B5E3C] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
                    <h2 className="text-3xl text-center font-semibold mb-2">📋 To-Do</h2>
                    <p className="text-lg text-center opacity-70">Organize suas tarefas diárias e aumente sua produtividade.</p>
                </NavLink>
                <NavLink to="/contato" className="bg-[#8B5E3C] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
                    <h2 className="text-3xl text-center font-semibold mb-2">📇 Contatos</h2>
                    <p className="text-lg text-center opacity-70">Gerencie seus contatos e mantenha suas conexões organizadas.</p>
                </NavLink>
                <NavLink to="/finance" className="bg-[#8B5E3C] text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
                    <h2 className="text-3xl text-center font-semibold mb-2">💰 Finanças</h2>
                    <p className="text-lg text-center opacity-70">Controle suas finanças pessoais e acompanhe seus gastos.</p>
                </NavLink>
                {/*Aqui, cada NavLink é estilizado como um cartão interativo que leva o usuário para a respectiva seção do aplicativo. O uso de Tailwind CSS permite uma aparência moderna e responsiva, garantindo uma ótima experiência em diferentes dispositivos. w-full*/} 
            </div>
        </div>
    )
} 
