class User < ApplicationRecord
    has_many :workout_sessions, dependent: :destroy
    has_secure_password

    validates :name, presence: true, uniqueness: true
end
