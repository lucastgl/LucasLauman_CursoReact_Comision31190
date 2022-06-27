const FormularioComprador = ({buyer, setBuyer}) => {
    
    return (
        <div className="cart__form">
            <form>
                <input placeholder="Full Name" type="text" value={buyer.name} onChange={(e) => setBuyer({...buyer, name: e.target.value})}></input>
                <input placeholder="Email" type="email" value={buyer.email} onChange={(e) => setBuyer({...buyer, email: e.target.value})}></input>
                <input placeholder="Phone" type="tel" value={buyer.phone} onChange={(e) => setBuyer({...buyer, phone: e.target.value})}></input>
                <input placeholder="Address" type="text" value={buyer.address} onChange={(e) => setBuyer({...buyer, address: e.target.value})}></input>
                <input placeholder="Coments" type="text" value={buyer.comment} onChange={(e) => setBuyer({...buyer, comment: e.target.value})}></input>
            </form>
        </div>
    )

}


export default FormularioComprador;