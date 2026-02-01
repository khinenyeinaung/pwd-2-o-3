function Item({ item }) {
    return <li>{item.name}</li>
}

const data = [
    { id: 4, name: "Apple", done: false },
    { id: 3, name: "Orange", done: true },
    { id: 2, name: "Egg", done: false },
    { id: 1, name: "Bread", done: false },
];

export default function App() {
    return (
		<div>
			<h1>Hello React</h1>
			<ul>
				{data.map(item => {
                    return <Item key={item.id} item={item} />
                })}
			</ul>
		</div>
	);
}
