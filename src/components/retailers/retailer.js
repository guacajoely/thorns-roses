export const Retailer = ({ name, address, distributors, nurseries }) => {

    return <section className="retailer">
                <header>{name}</header>
                <div className="address">{address}</div>
                <ul className="retailer--distributors">Distributors</ul>
                {distributors.map(distributor => {
                    return <li className="retailer--distributor" key={distributors.indexOf(distributor)}> {distributor.name}</li>
                })}
                <ul className="retailer--nurseries">Nurseries</ul>
                {nurseries.map(nursery => {
                    return <li className="retailer--nursery" key={nurseries.indexOf(nursery)}> {nursery.name}</li>
                })}
            </section>

}