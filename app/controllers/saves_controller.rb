class SavesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    binding.pry
    @webpage = Webpage.friendly.find(params[:webpage_id])
    if params[:save_action] == 'save'
      @webpage.save_to_database
    elsif params[:save_action] == 'restore'
      @webpage.load_from_redis
    else
      REDIS.del(
        "#{params[:webpage_id]}_gifs", "#{params[:webpage_id]}_marquees",
        "#{params[:webpage_id]}_styles"
      )
    end
    render layout: 'uglifier'
    render html: @webpage.html.html_safe
  end
end
