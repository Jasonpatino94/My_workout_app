class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode payload, ENV['JWT_SECRET']
      end
    
    def auth_header
    request.headers['Authorization']
  end
    
    def decode_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, ENV['JWT_SECRET'])[0]
            rescue JWT::DecodeError
                nil
            end
        end
    end 

    def current_user
        if decode_token
            user_id = decode_token['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: {message: 'You are not authorized'}, status: :unauthorized unless logged_in?
    end
    
end
