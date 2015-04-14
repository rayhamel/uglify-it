# require 'net/http'

require 'httparty'
require 'nokogiri'

def strip_html(source)
  source.gsub!(/<script.*?<\/script>|style=".*?"|<style.*?<\/style>/mi, '')
  source.gsub!(/<link.*?>|<iframe.*?<\/iframe>|color=".*?"|bgcolor=".*?"/mi, '')
  source.gsub!(/onclick=".*?"|onmouseover=".*?"|onmouseout=".*?"/mi, '')
  Nokogiri::HTML(source)
end

def display_html(url)
  File.write('test3.html', strip_html(HTTParty.get(url).body))
rescue SocketError
  puts 'Saved!'
end

display_html('http://www.google.com')
