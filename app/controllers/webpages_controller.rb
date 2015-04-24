class WebpagesController < ApplicationController
  def index
    @webpage = Webpage.new
    render :new
  end

  def show
    @webpage = Webpage.friendly.find(params[:id]).save_to_database
    render layout: 'uglifier'
  end

  def new
    @webpage = Webpage.new
  end

  def create
    @webpage = Webpage.new(webpage_params)
    if @webpage.save
      redirect_to webpage_path(@webpage)
    else
      flash.now[:errors] = "Error: #{@webpage.errors.full_messages.join("! ")}!"
      render :new
    end
    rescue URI::InvalidURIError, SocketError
      flash.now[:error] = "Error: #{@webpage.url} is not a valid URL!"
      render :new
  end

  private

  def webpage_params
    params.require(:webpage).permit(:url, :title)
  end
end
