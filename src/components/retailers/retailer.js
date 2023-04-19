export const Retailer = ({ id, name, address }) => {

    return <section className="retailer" key={`retailer--${id}`}>
                <header>{name}</header>
                <div className="address">{address}</div>
        
            </section>

}