export interface CreateDog {
  name: String;
  age: String;
  breed: ["salchicha", "chihuahua", "caniche"];
  coat_color: ["negro", "blanco", "overo", "marron"];
  picture_url?: String;
  owner_name: String;
}
