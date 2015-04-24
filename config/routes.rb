Rails.application.routes.draw do
  root 'webpages#new'
  resources :webpages, only: %i(index show new create) do
    resources :gifs, only: :create
    resources :marquees, only: :create
    resources :styles, only: :create
    resources :saves, only: :create
  end
end
