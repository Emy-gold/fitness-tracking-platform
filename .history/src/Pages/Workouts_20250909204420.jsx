import React from 'react';
import { useForm } from 'react-hook-form';
import workout from "../assets/workout.png";


function Workouts() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' });

    const onSubmit = (data) => {
        // data.sets, data.reps, data.weight are numbers because of valueAsNumber
        const workout = {
            id: Date.now(),
            exercise: data.exercise,
            sets: data.sets,
            reps: data.reps,
            weight: data.weight,
            unit: data.unit,
            description: data.description || '',
            timestamp: new Date().toISOString()
        };
        // append to local state and persist to localStorage (next step)
        console.log(workout);
        reset();
    };


    return (
        <>
            <div className="flex max-w-full flex-row-reverse justify-center m-4 gap-40 font-lexend">
                <img src={workout} alt="Workout illustration" />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5 gap-4">
                    <h1 className="text-left font-bold">Log your Workouts</h1>
                    <p className="text-left text-gray-400">Log your sets and track progress over time</p>

                    {/* Exercise select */}
                    <select {...register('exercise', { required: 'Exercise is required' })} className="py-2 border rounded-md bg-primary">
                        <option value="" disabled selected className="py-2 border rounded-md bg-primary text-gray-400">
                            Select exercise
                        </option>
                        <option value="bench-press">Bench Press</option>
                    </select>
                    {errors.exercise && <p className="text-red-500">{errors.exercise.message}</p>}

                    {/* Hidden ID */}
                    <input type="text" {...register('id')} hidden />

                    {/* Sets & Reps */}
                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            placeholder=" Sets"
                            {...register('sets', {
                                required: 'Sets are required',
                                valueAsNumber: true,
                                min: { value: 1, message: "Min 1 set" },
                                max: { value: 10, message: "Max 10 sets" },
                                validate: value => Number.isInteger(value) || 'Sets must be a whole number'

                            })}
                            className="py-2 border rounded-md bg-primary"
                        />
                        <input
                            type="text"
                            placeholder=" Reps"
                            {...register('reps', {
                                required: 'Reps are required',
                                valueAsNumber: true,
                                min: { value: 1, message: 'Min 1 rep' },
                                max: { value: 50, message: 'Max 50 reps' },
                                validate: value => Number.isInteger(value) || 'Reps must be a whole number'
                            })}
                            className="py-2 border rounded-md bg-primary"
                        />
                    </div>
                    {errors.sets && <p className="text-red-500">{errors.sets.message}</p>}
                    {errors.reps && <p className="text-red-500">{errors.reps.message}</p>}

                    {/* Weight */}
                    <input
                        type="text"
                        placeholder=" Weight"
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
        </>
    );
}

export default Workouts;
