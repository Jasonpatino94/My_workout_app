class AuthController < ApplicationController 
    before_action :authorized , only: [:profile]

    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            token = encode_token({user_id: user.id})
            render json: {jwt: token, user: user}
        else
            render json: {error: 'Wrong name or password!'}, status: :unauthorized
        end
    end

    def profile
        render json: {user: @user, workout_sessions: @user.workout_sessions.map {|ws| WorkoutSessionSerializer.new(ws) }}
    end


end