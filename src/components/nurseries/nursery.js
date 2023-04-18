export const Nursery = ({ id, name, flowers, distributors }) => {

    return <section className="nursery" key={`nursery--${id}`}>
                <header>{name}</header>
                <ul>Flowers</ul>
                {flowers.map(flower => {
                    return <li className="flower" key={flower.id}> {flower.color} {flower.species}s ${flower.price.toFixed(2)}</li>
                })}

                <ul>Distributors</ul>
                {distributors.map(distributor => {
                    return <li className="distributor" key={distributors.indexOf(distributor)}> {distributor}</li>
                })}
            </section>
            
}