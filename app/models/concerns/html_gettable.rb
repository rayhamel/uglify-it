module HTMLGettable
  extend ActiveSupport::Concern

  def strip_html(doc)
    doc.gsub!(
      /<link.*?>|<style.*?<\/style>|bgcolor=["'].*?["']|color=["'].*?["']|
      style=["'].*?["']/imx, ''
    )
    Nokogiri::HTML(Loofah.document(doc).scrub!(:prune).to_s)
  end

  def fix_links(doc, remote_url)
    tags = { 'img' => 'src', 'a' => 'href' }
    doc.search(tags.keys.join(',')).each do |node|
      url_param = tags[node.name]
      link = node[url_param]
      next if link.nil? || link.empty?
      uri = URI.parse(link)
      next if uri.host
      uri.scheme = remote_url.scheme
      uri.host = remote_url.host
      node[url_param] = uri.to_s
    end
  end

  def save_html
    url = Domainatrix.parse(self.url).url
    doc = strip_html(HTTParty.get(url).body)
    fix_links(doc, URI.parse(url))
    self.html = doc.to_s.force_encoding('iso8859-1').encode('utf-8')
  end
end
