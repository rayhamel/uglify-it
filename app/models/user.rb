class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :confirmable, :database_authenticatable, :recoverable, :registerable,
         :rememberable, :trackable, :validatable

  has_many :webpages
end
