class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :workout_sessions
end
