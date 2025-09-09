import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import workout from "../assets/workout.png";

function Workouts() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' });
    const [exercises, setExercises] = useState([]);

    // Fetch exercises from API
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch("https://wger.de/api/v2/exerciseinfo/?language=2&limit=50");
                const data = await response.json();

                // Extract English translation names
                const formatted = data.results.map((exercise) => {
                    const translation = exercise.translations.find(t => t.language === 2);
                    return {
                        id: exercise.id,
                        name: translation ? translation.name : "Unnamed exercise",
                    };
                });

                setExercises(formatted);
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };

        fetchExercises();
    }, []);

    const onSubmit = (data) => {
        const workoutData = {
            id: Date.now(),
            exercise: data.exercise,
            sets: data.sets,
            reps: data.reps,
            weight: data.weight,
            unit: data.unit,
            description: data.description || '',
            timestamp: new Date().toISOString()
        };

        console.log(workoutData);
        reset();
    };

    return (
        <div className="flex max-w-full flex-row-reverse justify-center m-4 gap-40 font-lexend">
            <img src={workout} alt="Workout illustration" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-4">
                <h1 className="text-left font-bold">Log your Workouts</h1>
                <p className="text-left text-gray-400">Log your sets and track progress over time</p>

                {/* Exercise select */}
                <select
                    {...register('exercise', { required: 'Exercise is required' })}
                    className="py-2 border rounded-md bg-primary"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select exercise
                    </option>
                    {exercises.map((exercise) => (
                        <option key={exercise.id} value={exercise.id}>
                            {exercise.name}
                        </option>
                    ))}
                </select>
                {errors.exercise && <p className="text-red-500">{errors.exercise.message}</p>}

                {/* Sets & Reps */}
                <div className="flex flex-row gap-2">
                    <input
                        type="number"
                        placeholder="Sets"
                        {...register('sets', {
                            required: 'Sets are required',
                            valueAsNumber: true,
                            min: { value: 1, message: "Min 1 set" },
                            max: { value: 10, message: "Max 10 sets" }
                        })}
                        className="py-2 border rounded-md bg-primary"
                    />
                    <input
                        type="number"
                        placeholder="Reps"
                        {...register('reps', {
                            required: 'Reps are required',
                            valueAsNumber: true,
                            min: { value: 1, message: 'Min 1 rep' },
                            max: { value: 50, message: 'Max 50 reps' }
                        })}
                        className="py-2 border rounded-md bg-primary"
                    />
                </div>
                {errors.sets && <p className="text-red-500">{errors.sets.message}</p>}
                {errors.reps && <p className="text-red-500">{errors.reps.message}</p>}

                {/* Weight */}
                <input
                    type="number"
                    placeholder="Weight"
                    {...register('weight', {
                        required: 'Weight is required',
                        valueAsNumber: true,
                        min: { value: 0.1, message: 'Weight must be greater than 0' },
                        max: { value: 1000, message: 'Weight seems too large' }
                    })}
                    className="py-2 border rounded-md bg-primary"
                />
                {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}

                {/* Unit */}
                <div>
                    <label className="mr-2">
                        <input type="radio" value="kg" {...register('unit', { required: 'Unit is required' })} /> kg
                    </label>
                    <label>
                        <input type="radio" value="lb" {...register('unit', { required: 'Unit is required' })} /> lb
                    </label>
                </div>
                {errors.unit && <p className="text-red-500">{errors.unit.message}</p>}

                {/* Notes */}
                <textarea
                    className="border rounded-md bg-primary py-5"
                    placeholder="Notes (optional)"
                    {...register('description')}
                ></textarea>

                {/* Submit */}
                <button className="bg-blue-500 py-2 rounded-md mt-3 shadow-sm text-white hover:bg-blue-600 hover:shadow-md transition-transform duration-300">
                    Add Workout
                </button>
            </form>
        </div>
    );
}

export default Workouts;

