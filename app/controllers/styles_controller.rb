class StylesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    REDIS.hset("#{params[:webpage_id]}_styles", params[:entry], params[:value])
    render nothing: true
  end
end
