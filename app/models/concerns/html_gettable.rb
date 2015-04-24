module HTMLGettable
  extend ActiveSupport::Concern

  def save_html
    return if self.html
    url = Domainatrix.parse(self.url).url
    doc = Nokogiri::HTML(HTTParty.get(url).body)
    counter = 0
    doc.traverse { |node| node['data-uglifier'] = counter.to_s; counter += 1 }
    fix_links(doc, URI.parse(url))
    self.html = doc.to_s.gsub!(%r{</body>.*?</html>}im, '').encode('utf-8')
  end

  private

  def strip_js(doc)
    Nokogiri::HTML(Loofah.document(doc).scrub!(:prune).to_s)
  end

  def strip_css(doc)
    doc.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
  end

  def fix_links(doc, remote_url)
    tags = {
      'a' => 'href', 'form' => 'action', 'iframe' => 'src', 'img' => 'src',
      'link' => 'href', 'script' => 'src', 'source' => 'src'
    }
    doc.search(tags.keys.join(',')).each do |node|
      begin
        url_param = tags[node.name]
        link = node[url_param]
        next if link.nil? || link.empty?
        uri = URI.parse(URI.escape(link))
        next if uri.host
        uri.scheme = remote_url.scheme
        uri.host = remote_url.host
        node[url_param] = uri.to_s
      rescue URI::InvalidURIError
        next
      end
    end
  end
end
