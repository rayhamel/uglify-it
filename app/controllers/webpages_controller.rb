class WebpagesController < ApplicationController
  def show
    @webpage = Webpage.friendly.find(params[:id])
    render layout: 'uglifier'
  end

  def new
    @webpage = Webpage.new
  end

  def create
    @webpage = Webpage.new(webpage_params)
    @webpage.user = current_user
    if @webpage.save
      redirect_to webpage_path(@webpage)
    else
      flash.now[:errors] = @webpage.errors.full_messages.join("! ") + ?!
      render :new
    end
  end

  private

  def webpage_params
    params.require(:webpage).permit(:url, :title)
  end
end
