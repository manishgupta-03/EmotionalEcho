import axios from "axios";

export const getRecommendation = (payload: { base64: string }) => {
    return axios.post(
      "https://f3livnn8zb.execute-api.ap-southeast-1.amazonaws.com/testing/detect_mood",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

// crate a api call for the following endpoint
const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD-DuiDVAawczPZtItFZ1tTX2jP6eVf_HA";

 



export const generateContent = (emotions: any , ) => {

    const payload= `
I have ${emotions} mood today

I need recommendations for

The returned format should be in JSON-string format, as I need to parse it for an api.
The format of the data returned should look like this
        {
        "quotes": [
            "Happiness is not a destination, it's a way of traveling.",
            "The best way to cheer yourself is to try to cheer somebody else up.",
            "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            "Happiness is a warm puppy.",
            "The only thing that will make you happy is being happy with who you are."
        ],
        "movies": [
            {"title": "Singin' in the Rain", "genre": "Musical, Romance, Comedy"},
            {"title": "Chef", "genre": "Comedy, Drama"},
            {"title": "Paddington 2", "genre": "Family, Comedy, Adventure"},
            {"title": "The Princess Bride", "genre": "Adventure, Family, Fantasy"},
            {"title": "Little Miss Sunshine", "genre": "Comedy, Drama, Road Trip"}

        ],
        "music": [
            {"artist": "Lizzo", "song": "Good as Hell", "genre": "Pop"},
            {"artist": "Pharrell Williams", "song": "Happy", "genre": "Pop"},
            {"artist": "Earth, Wind & Fire", "song": "September", "genre": "Funk, Soul"},
            {"artist": "The Beach Boys", "song": "Good Vibrations", "genre": "Pop, Rock"},
            {"artist": "Bill Withers", "song": "Lovely Day", "genre": "Soul"}
        ],
        "books": [
            {"title": "The House in the Cerulean Sea", "author": "T.J. Klune", "genre": "Fantasy"},
            {"title": "A Psalm for the Wild-Built", "author": "Becky Chambers", "genre": "Science Fiction"},
            {"title": "The Rosie Project", "author": "Graeme Simsion", "genre": "Romance"},
            {"title": "Anne of Green Gables", "author": "L.M. Montgomery", "genre": "Classic"},
            {"title": "Eleanor Oliphant Is Completely Fine", "author": "Gail Honeyman", "genre": "Contemporary Fiction"}

        ],
        "jokes": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "What do you call a lazy kangaroo? Pouch potato.",
            "What do you call a fish with no eyes? Fsh.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Parallel lines have so much in common. It’s a shame they’ll never meet."
        ],
        "helplines":["Bharat-helpliine.com"],
        "major_recommendations":"Don't feel alone we are there for your help, just sit with calm mind"
}

and the data returned should be a string of JSON, so that we can load it and return to the UI. Make sure the data should have the format as shared above.
`;
const data = {
    contents: [{
      parts: [{ text: payload }]
    }]
  };

  
  return axios.post(apiUrl, data);
};