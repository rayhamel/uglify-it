class GifsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    REDIS.sadd("#{params[:webpage_id]}_gifs", params[:entry], params[:value])
    render json: nil, status: :ok
  end
end
