import React, { useEffect, useState } from 'react';

function Dashboard({ workouts = [] }) {
    const [stats, setStats] = useState({
        totalWorkouts: 0,
        totalSets: 0,
        totalReps: 0,
        totalWeight: 0,
        recentWorkout: null,
    });

    useEffect(() => {
        const totalWorkouts = workouts.length;
        let totalSets = 0, totalReps = 0, totalWeight = 0;

        workouts.forEach(w => {
            totalSets += w.sets;
            totalReps += w.reps;
            totalWeight += w.sets * w.reps * (w.weight || 0);
        });

        const recentWorkout = workouts[workouts.length - 1] || null;

        setStats({ totalWorkouts, totalSets, totalReps, totalWeight, recentWorkout });
    }, [workouts]);

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6 font-lexend">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-100 p-4 rounded shadow">
                    <p className="text-2xl font-semibold">{stats.totalWorkouts}</p>
                    <p className="text-gray-600">Workouts Logged</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                    <p className="text-2xl font-semibold">{stats.totalSets}</p>
                    <p className="text-gray-600">Sets Completed</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                    <p className="text-2xl font-semibold">{stats.totalReps}</p>
                    <p className="text-gray-600">Reps Completed</p>
                </div>
                <div className="bg-gray-100 p-4 rounded shadow">
                    <p className="text-2xl font-semibold">{stats.totalWeight}</p>
                    <p className="text-gray-600">Total Weight Lifted</p>
                </div>
            </div>

            {stats.recentWorkout && (
                <div className="bg-gray-50 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Most Recent Workout</h2>
                    <p><strong>Date:</strong> {new Date(stats.recentWorkout.timestamp).toLocaleDateString()}</p>
                    <p><strong>Exercise:</strong> {stats.recentWorkout.exercise}</p>
                    <p><strong>Sets:</strong> {stats.recentWorkout.sets}, <strong>Reps:</strong> {stats.recentWorkout.reps}, <strong>Weight:</strong> {stats.recentWorkout.weight} {stats.recentWorkout.unit}</p>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
