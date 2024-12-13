import { useEffect, useState } from "react";

const ClothesList = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await fetch(
          "https://your-clothes-api-url.com/v1/clothes", // Remplacez par l'URL de l'API
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "YOUR_API_KEY", // Remplacez par votre clé RapidAPI
              "X-RapidAPI-Host": "your-clothes-api-host.com", // Remplacez par le host correct
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }

        const data = await response.json();
        setClothes(data); // Assurez-vous que la structure correspond aux données de l'API
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchClothes();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste de vêtements</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clothes.map((item, index) => (
          <li
            key={index}
            className="border rounded-md shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover mb-2"
            />
            <h2 className="font-medium text-lg">{item.name}</h2>
            <p className="text-gray-600">{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothesList;
