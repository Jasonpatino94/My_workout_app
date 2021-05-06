class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.integer :weight
      t.integer :reps
      t.integer :sets
      t.integer :workout_session_id

      t.timestamps
    end
  end
end
