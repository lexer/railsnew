class FoosController < ApplicationController
  def index

  end

  def show
    @message = 'Recived with unobtrusive'

    render :action => :show
  end
end