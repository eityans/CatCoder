class ApplicationController < ActionController::Base
  def hello_world
    render json: { text: "ここをキャンプ地とする" }
  end
end
