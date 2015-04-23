FactoryGirl.define do
  factory :webpage do
    html "<!DOCTYPE html><title>a</title>"
    url "http://www.example.com"
    title "Cool Webpage!"
    sequence(:uuid, &:to_s)
  end
end
