class User < ApplicationRecord
    has_many :workout_sessions, dependent: :destroy
    has_many :workouts, through: :workout_sessions
    has_secure_password

    validates :name, presence: true
end
