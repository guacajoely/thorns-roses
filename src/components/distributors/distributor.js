export const Distributor = ({ name, retailers, flowers }) => {

    return <section className="distributor">
                <header>{name}</header>

                <ul className="flower-list">Flowers</ul>
                {flowers.map(flower => {
                    return <li className="flower" key={flowers.indexOf(flower)}> {flower.color} {flower.species}s ${flower.price.toFixed(2)}</li>
                })}

                <ul className="distributor--retailers">Retailers</ul>
                {retailers.map(retailer => {
                    return <li className="distributor--retailer" key={retailers.indexOf(retailer)}> {retailer}</li>
                })}


            </section>

}