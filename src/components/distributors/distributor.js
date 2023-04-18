export const Distributor = ({ id, name, retailers }) => {

    return <section className="distributor" key={`distributor--${id}`}>
                <header>{name}</header>


                <ul className="retailer-list">Retailers</ul>
                {retailers.map(retailer => {
                    return <li className="retailer" key={retailers.indexOf(retailer)}> {retailer}</li>
                })}


            </section>

}