export const Nursery = ({ id, name, flowers, distributors }) => {

    return <section className="nursery" key={`nursery--${id}`}>
                <header>{name}</header>
                <ul>Flowers</ul>
                {
                    flowers.map(flower => {
                    return <li> {flower.color} {flower.species}s ${flower.price.toFixed(2)}</li>
                })
                
                }
            </section>
    
}