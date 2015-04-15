class WebpagesController < ApplicationController
  before_action :authenticate_user!, only: %i(create)

  def show
    @webpage = Webpage.friendly.find(params[:id])
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
      flash[:notice] = @webpage.errors.full_messages.join("! ")
      render :new
    end
  end

  private

  def webpage_params
    params.require(:webpage).permit(:url, :title)
  end
end
