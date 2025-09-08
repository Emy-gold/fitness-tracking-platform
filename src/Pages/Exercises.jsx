import React, { useEffect, useState } from "react";

function Exercises() {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const res = await fetch(
                    "https://wger.de/api/v2/exerciseinfo/?language=2&limit=50"
                );
                if (!res.ok) throw new Error("Failed to fetch exercises");

                const data = await res.json();

                // Extract English translation for name and description
                const formattedExercises = data.results.map((ex) => {
                    const english = ex.translations.find((t) => t.language === 2);
                    return {
                        id: ex.id,
                        name: english?.name || "No name available",
                        description: english?.description
                            ? english.description.replace(/<[^>]*>/g, "")
                            : "No description available",
                        category: ex.category?.name || "Unknown",
                    };
                });

                setExercises(formattedExercises);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchExercises();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading exercises...</p>;
    if (error)
        return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
    if (exercises.length === 0)
        return <p className="text-center mt-10">No exercises found.</p>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Exercises</h1>
            <ul className="space-y-4">
                {exercises.map((exercise) => (
                    <li
                        key={exercise.id}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold">{exercise.name}</h2>
                        <p className="text-gray-600">{exercise.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Category: {exercise.category}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Exercises;


