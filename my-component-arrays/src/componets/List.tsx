import { TopSaleCoffee } from "./TopSaleCoffee";
import { v4 as uuidv4 } from 'uuid';

interface Coffees {
    id: string;
    name: string;
    description: string;
    preparationTime: number;

}

const coffees: Coffees[] = [
    { id: uuidv4(), name: "Iced Caramel Macchiato", description: "Rico com notas de baunilha", preparationTime: 3 },
    { id: uuidv4(), name: "Caffe Mocha", description: "Um clássico Starbucks®", preparationTime: 3 },
    { id: uuidv4(), name: "Starbucks Blond Vanilla", description: "Impactante e Cremoso", preparationTime: 3 },
    { id: uuidv4(), name: "Sparking Expresso", description: "Um toque brilhante", preparationTime: 3 },
    { id: uuidv4(), name: "Affogato", description: "Impactante e Cremoso", preparationTime: 5 }
];

export function List() {
    const listItems = coffees.map(coffee =>
        <li key={coffee.id}>
            {coffee.name}
        </li>);

    const topSale = coffees.filter(
        (coffee) => ["Caffe Mocha", "Affogato"].includes(coffee.name)
    );

    return (
        <div style={{ margin: '0 auto', width: 'fit-content', textAlign: 'left' }}>
            <h3>Os cafés mais vendidos: </h3>
            <div className="coffee-list">
                {topSale.map((coffee) => (
                    <TopSaleCoffee
                        key={Math.random()}
                        name={coffee.name}
                        description={coffee.description} />
                ))}
            </div >
            <h3>Outros cafés: </h3>
            <ul> {listItems} </ul>
        </div>
    );
}