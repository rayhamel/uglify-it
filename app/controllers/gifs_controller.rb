class GifsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    REDIS.sadd("#{params[:webpage_id]}_gifs", params[:entry], params[:value])
    render nothing: true
  end
end
