export const Nursery = ({ id, name, flowers, distributors }) => {

    return <section className="nursery" key={`nursery--${id}`}>
                <header>{name}</header>
                
            </section>
    
}