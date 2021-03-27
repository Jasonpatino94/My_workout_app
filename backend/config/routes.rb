Rails.application.routes.draw do

  resources :workout_sessions do
    resources :workouts
  end
  
  resources :users do
    resources :workout_sessions
  end 

  resources :workouts

  post '/authenticate', to: 'auth#create'
  get '/profile', to: 'auth#profile'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
