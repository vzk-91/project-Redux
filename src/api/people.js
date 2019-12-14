import Storage from '../services/storage';

class People {
    
    getPeople(){
        return fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users')
        .then(response => response.json())
    }

    login(data){
      return fetch( 
            'https://it-blog-posts.herokuapp.com/api/people/login',
            {
              method: "POST", 
              body: JSON.stringify(data), 
              headers: {
                'Content-Type': 'application/json' 
              }
            }
          )
    }

    registration(data){
      return   fetch( 
        'https://it-blog-posts.herokuapp.com/api/people',
        {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            'Content-Type': 'application/json' 
          }
        }
      )
    }

    byId(id){
      return  fetch(`https://it-blog-posts.herokuapp.com/api/people/${id}`)
      .then(data=>data.json())
    }

    logOut(data){
      return fetch(`"https://it-blog-posts.herokuapp.com/api/people/logout?access_token=${data}`,
      {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json' 
        }
      }
      )
      //.then(response => console.log(response))
      
    }
}


export default People;



