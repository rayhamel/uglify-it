if Rails.env.development?
  REDIS = Redis.new(host: 'localhost', port: 6379, db: 0)
elsif Rails.env.test?
  REDIS = Redis.new(host: 'localhost', port: 6379, db: 1)
else
  uri = URI.parse(ENV["REDISCLOUD_URL"])
  REDIS = Redis.new(host: uri.host, port: uri.port, password: uri.password)
end
