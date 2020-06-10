# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create!(email: "demo@mail.com", password: "demopassword", first_name: "Demo", last_name: "User")
user_1 = User.create!(email: "example@mail.com", password: "examplepass", first_name: "Meriadoc", last_name: "Brandybuck")
user_2 = User.create!(email: "cbrown@example.com", password: "examplepass", first_name: "Charlie", last_name: "Brown")

Event.destroy_all
event_1 = Event.create!(title: "EDCLV", category: "Music", description: "EDCLV 2020, LET'S MAKE SOME NOISE!!", host_id: 1, price: 299.99, start_date: "2020/10/02 23:00", end_date: "2020/10/04 08:00", location: "Las Vegas, Neveda")
event_2 = Event.create!(title: "Oktoberfest NYC", category: "Food & Drink", description: "Bottom's up!", host_id: 2, price: 100.00, start_date: "2021/09/18 21:00:00", end_date: "2021/10/04 24:00:00", location: "New York City, New York")
event_3 = Event.create!(title: "Toy Drive", category: "Charity & Causes", description: "Come donate your old toys for those in need!", host_id: 3, price: 0.00, start_date: "2020/12/01 13:00:00", end_date: "2020/12/03 20:00:00", location: "Hennepin County Minnesota")
event_4 = Event.create!(title: "Anime Con 2020", category: "Entertainment", description: "Anime Convention 2020, come meet the artists!", host_id: 1, price: 59.00, start_date: "2020/08/12 14:00:00", end_date:"2020/08/15 23:00:00", location: "San Francisco, California")
event_5 = Event.create!(title: "Frozen On Ice", category: "Music", description: "Let it go!", host_id: 2, price: 70.00, start_date: "2020/09/22 20:00:00", end_date:"2020/10/06 23:00:00", location: "New York City, New York")
event_6 = Event.create!(title: "Central Park Picnic Day", category: "Food & Drink", description: "Come relax in the sweet Autumn weather", host_id: 1, price: 0, start_date: "2020/10/21 15:00:00", end_date:"2020/10/21 21:00:00", location: "New York City, New York")
event_7 = Event.create!(title: "Food Drive", category: "Charity & Causes", description: "Help us feed the needy this fall!", host_id: 3, price: 0, start_date: "2020/07/1 13:00:00", end_date:"2020/07/7 21:00:00", location: "San Francisco, California")
event_8 = Event.create!(title: "Doggy Playdate NYC", category: "Entertainment", description: "Come bring your dog and make new friends!", host_id: 3, price: 0, start_date: "2020/07/23 12:00:00", end_date:"2020/07/23 17:00:00", location: "New York City, New York")
event_9 = Event.create!(title: "A Taste of the Mediterranean", category: "Food & Drink", description: "Enjoy authentic Mediterranean food at the street fair to be!", host_id: 2, price: 15.00, start_date: "2020/09/01 13:00:00", end_date:"2020/09/07 22:00:00", location: "Austin, Texas")
event_10 = Event.create!(title: "Portals", category: "Music", description: "Come experience the musical genius of Alan Silvestri", host_id: 1, price: 82.00, start_date: "2020/12/11 18:00:00", end_date:"2020/12/13 00:00:00", location: "Kyoto, Japan")
event_11 = Event.create!(title: "Gallery Showing", category: "Entertainment", description: "Explore our colorful and expansive collection", host_id: 2, price: 25.00, start_date: "2021/02/13 18:00:00", end_date:"2021/02/16 00:00:00", location: "Beverly Hills, California")
event_10 = Event.create!(title: "Run For Fun!", category: "Entertainment", description: "A marathon for all!", host_id: 2, price: 82.00, start_date: "2020/10/01 15:00:00", end_date:"2020/10/01 21:00:00", location: "New York City, New York")