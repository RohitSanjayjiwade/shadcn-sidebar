export default function ItemPage({params}:{params:{item: string}}) {
	return (
		<div>
			<h1 className="text-3xl font-semibold capitalize mt-6">{params.item} Page</h1>

			<p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit ad similique laboriosam cum, illum officiis autem sunt voluptatem iste beatae in voluptatibus earum dolor repudiandae quia iure id soluta ut obcaecati. Voluptate id quidem natus corporis laboriosam consequatur! Id placeat ut adipisci vitae fugiat incidunt accusantium voluptatibus neque architecto obcaecati delectus eligendi quisquam, recusandae vero provident, necessitatibus illo ipsam natus debitis at. Porro, magnam ex, voluptatem omnis voluptates nobis itaque dolorum perspiciatis sit labore doloribus animi officia non dolorem eius provident quam harum fugiat nihil in, magni eveniet quis! Ex dignissimos magni in! Quaerat obcaecati totam maxime illum deleniti!</p>

		</div>
	);
}