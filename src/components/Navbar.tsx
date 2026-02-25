import { NavLink } from "react-router-dom"

export function Menu() {
    // Classes base aplicadas a todos os links da navbar
    // Mantém padding, borda arredondada e animação padrão
    const baseCss = "py-2 px-4 rounded-xl transition-colors duration-300"
    // Estilo aplicado quando a rota está ativa (link selecionado)
    const activeCss = "bg-[#c76f3c] text-zinc-50"
    // Estilo aplicado quando a rota NÃO está ativa
    // Inclui efeito hover para melhorar a experiência
    const inactiveCss = "text-zinc-100 hover:text-zinc-50"

    return (
        <nav className="bg-[#8B5E3C] h-16 flex items-center justify-between px-8 text-zinc-100 shadow-md">
            <h1 className="font-serif tracking-tight text-xl">
                CapyBoard<span className="text-amber-500">.</span>
            </h1>
            {/* NavLink usa a propriedade isActive para aplicar automaticamente o estilo correto conforme a rota atual */}
            <ul className="flex gap-6 font-sans">
                <li>
                    <NavLink to="/" className={({ isActive }) => `${baseCss} ${isActive ? activeCss : inactiveCss}`}>
                        Início
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/todo" className={({ isActive }) => `${baseCss} ${isActive ? activeCss : inactiveCss}`}>
                        To-Do
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contato" className={({ isActive }) => `${baseCss} ${isActive ? activeCss : inactiveCss}`}>
                        Contatos
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/finance" className={({ isActive }) => `${baseCss} ${isActive ? activeCss : inactiveCss}`}>
                        Finanças
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
