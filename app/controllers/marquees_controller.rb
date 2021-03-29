class MarqueesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    REDIS.hset(
      "#{params[:webpage_id]}_marquees", params[:entry], params[:value]
    )
    render json: nil, status: :ok
  end
end
