export default function Card() {
  return (
    <div className="max-w-[250px] h-[320px] text-center bg-white rounded-sm shadow-md overflow-hidden">
      <img
        className="w-full h-[75%] object-cover transition-transform duration-300 hover:scale-105"
        src="https://cdn1.ozone.ru/s3/multimedia-e/6827348858.jpg"
        alt="sweet"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-700">
          Man Sweet Oversize
        </h3>
        <p className="text-gray-500">50 DH</p>
      </div>
    </div>
  );
}
