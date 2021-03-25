class WorkoutSession < ApplicationRecord
    has_many :workouts, dependent: :destroy
    belongs_to :user
end 
