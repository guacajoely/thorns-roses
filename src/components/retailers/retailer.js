export const Retailer = ({ name, address, distributors, nurseries, flowers}) => {

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
                <ul className="retailer--flowers">Flowers</ul>
                {flowers.map(flower => {
                    return <li className="retailer--flower" key={flowers.indexOf(flower)}> 
                        {flower.color.charAt(0).toUpperCase() + flower.color.slice(1)}
                        {" "}
                        {flower.species.charAt(0).toUpperCase() + flower.species.slice(1)}s
                        ${flower.price.toFixed(2)}</li>
                })}
            </section>

}