Rails.application.routes.draw do
  root to: 'posts#index'  
  post 'posts123', to: 'posts#create'
end
