export const Retailer = ({ name, address, distributors }) => {

    return <section className="retailer">
                <header>{name}</header>
                <div className="address">{address}</div>
                <ul className="retailer--distributors">Distributors</ul>
                {distributors.map(distributor => {
                    return <li className="retailer--distributor" key={distributors.indexOf(distributor)}> {distributor}</li>
                })}
            </section>

}