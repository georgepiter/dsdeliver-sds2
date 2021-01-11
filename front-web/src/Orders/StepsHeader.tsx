function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS ETAPAS:
                </h1>
            </div>
            <ul className="steps-itens">
                <li>
                    <span className="steps-number">1 -</span>
                    Selecione os produtos e localização.
                </li>
                <li>
                    <span className="steps-number">2 -</span>
                    Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                </li>


            </ul>
        </header>
    )
}

export default StepsHeader;