export default function Card(props) {
  return (
    <div className="h-auto text-center bg-white rounded-sm shadow-md overflow-hidden">
      <img
        className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
        src={props.pro.image}
        alt={props.pro.name}
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-700">
          {props.pro.name}
        </h3>
        <p className="text-gray-500">
          {props.pro.price} {"$"}{" "}
        </p>
        <button className="bg-gray-900 text-gray-100 w-[80%] mx-auto my-1 py-2 rounded-md text-lg">Add to cart</button>

      </div>
    </div>
  );
}
