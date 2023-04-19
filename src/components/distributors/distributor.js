export const Distributor = ({ id, name, retailers, flowers }) => {

    return <section className="distributor" key={`distributor--${id}`}>
                <header>{name}</header>
                
                <ul className="flower-list">Flowers</ul>
                {flowers.map(flower => {
                    return <li className="flower" key={flower.id}> {flower.color} {flower.species}s ${flower.price.toFixed(2)}</li>
                })}

                <ul className="retailer-list">Retailers</ul>
                {retailers.map(retailer => {
                    return <li className="retailer" key={retailers.indexOf(retailer)}> {retailer}</li>
                })}


            </section>

}