const apiKey = 'c0aJGsYG-tYCJfaUn1kTwxJzq7-EBOimc5kmalxY85Hj-nATFE9of7xFPwJLruXWpf8jNEvwK660hCEOdni-rsskHDc8UbwK7qrYzyOpRBRfEDlEWz9Dsp4WtvbcYXYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
        .then( response => { return response.json })
        .then(jsonResponse => {
            if(jsonResponse.business)
        });    
    }
}