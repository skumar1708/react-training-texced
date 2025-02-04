const DATA = [
    {name: "Shravan", role: "admin"},
    {name: "Prashant", role: "Owner"},
    {name: "Mukul", role: "user"}
];
const List = () => {
    return (
        <ul>
            {DATA.map(item => <li>{item.name} is {item.role}</li>)}
        </ul>
    );
}

export default List;