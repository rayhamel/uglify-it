module ApplicationHelper
  def strip_html(src)
    src.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
    Nokogiri::HTML(Loofah.document(src).scrub!(:prune).to_s).to_s
  end

  class HTMLSaver
    include HTTParty

    def self.save_html(url)
      strip_html(get(self.base_uri(url)).body)
      rescue => e
        puts e.inspect
    end
  end

  def save_html(url)
    HTMLSaver.save_html(url)
  end
end
