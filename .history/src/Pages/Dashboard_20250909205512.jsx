import React, { useEffect, useState } from "react";

function Dashboard() {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=12");
                const data = await response.json();

                // Fetch images for each exercise
                const exercisesWithImages = await Promise.all(
                    data.results.map(async (exercise) => {
                        const imgRes = await fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${exercise.id}`);
                        const imgData = await imgRes.json();
                        return {
                            ...exercise,
                            images: imgData.results, // could be empty
                        };
                    })
                );

                setExercises(exercisesWithImages);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching exercises:", error);
                setLoading(false);
            }
        };

        fetchExercises();
    }, []);

    if (loading) return <p className="text-center mt-6">Loading Dashboard...</p>;

    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold mb-6">🏋️ Dashboard</h1>

            {exercises.length === 0 ? (
                <p>No exercises found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-white shadow rounded-lg p-4">
                            {/* Title */}
                            <h2 className="font-semibold text-lg mb-2">
                                {exercise.name || "No name available"}
                            </h2>

                            {/* Image (first image or fallback) */}
                            {exercise.images.length > 0 ? (
                                <img
                                    src={exercise.images[0].image}
                                    alt={exercise.name || "Exercise"}
                                    className="w-full h-40 object-cover rounded"
                                />
                            ) : (
                                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
                                    <span className="text-gray-500">No image</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
