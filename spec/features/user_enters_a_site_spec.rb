require 'rails_helper'

feature %(
  As a user
  I want to enter a URL
  And have the webpage at that location rendered back to me.
) do

  scenario 'success' do
    visit new_webpage_path
    fill_in "URL", with: 'google.com'
    click_button 'Submit'
    expect(body).to have_content 'Google Search'
  end

  scenario 'title and URL too short' do
    visit new_webpage_path
    fill_in 'Title', with: 'a'
    click_button 'Submit'
    expect(page).to have_content 'Title is too short (minimum is 3 characters)'
    expect(page).to have_content "Url can't be blank"
    expect(page).to have_content 'Url is too short (minimum is 4 characters)'
  end

  scenario 'title and URL too long' do
    visit new_webpage_path
    fill_in 'Title', with: ('a' * 256)
    fill_in 'URL', with: ('a' * 512)
    click_button 'Submit'
    expect(page).to have_content 'Title is too long (maximum is 255 characters)'
    expect(page).to have_content 'Url is too long (maximum is 511 characters)'
  end

  scenario 'invalid URL' do
    visit new_webpage_path
    fill_in 'URL', with: ';;;;'
    click_button 'Submit'
    expect(page).to have_content ';;;; is not a valid URL!'
  end
end
