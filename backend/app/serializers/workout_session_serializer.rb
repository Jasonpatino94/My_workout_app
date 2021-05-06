class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at, :workouts
end
