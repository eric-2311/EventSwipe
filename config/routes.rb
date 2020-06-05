Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    # resources :users
    get '/users/email', to: 'users#email'
    resources :users
    resource :session
  end

  #routing has yet to be finalized
end

# need a UI reducer and current user reducer allowing my state shape to store info of my current user
# valid email? => true || false *default to false