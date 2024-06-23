namespace :cache do
    desc "Clear the entire cache"
    task clear: :environment do
      Rails.cache.clear
      puts "Cache cleared"
    end
  end
  