export const Distributor = ({ id, name }) => {

    return <section className="distributor" key={`distributor--${id}`}>
                <header>{name}</header>
            </section>

}