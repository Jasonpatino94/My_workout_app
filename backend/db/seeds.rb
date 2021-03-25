puts "seeding..."

User.delete_all
WorkoutSession.delete_all
Workout.delete_all

u1 = User.create(name: 'Jason', password: 'jason')
u2 = User.create(name: 'Mike', password: 'mike')
u3 = User.create(name: 'Joe', password: 'joe')

ws1 = u1.workout_sessions.create(name: 'Leg Day')
ws2 = u1.workout_sessions.create(name: 'Arm Day')
ws3 = u1.workout_sessions.create(name: 'Chest Day')

w1 = ws3.workouts.create(name: 'Bench', weight: 150, reps: 3, sets: 3)
w2 = ws3.workouts.create(name: 'Dips', weight:25, reps:3, sets:4)

puts "seeding complete!"