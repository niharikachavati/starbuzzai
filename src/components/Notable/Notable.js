import React from 'react';
import './Notable.css'

let CONTACTS = [
    {
      id: 1,
      name: 'Emily cooper',
      phoneNumber: '175.914M',
      image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
    },
    {
      id: 2,
      name: 'Albert',
      phoneNumber: '175.914M',
      image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
      
    },
    {
      id: 3,
      name: 'Eleanor Penala',
      phoneNumber: '175.914M',
      image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
    },
    {
      id: 4,
      name: 'Marvin McKinney',
      phoneNumber: '175.914M',
      image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
    },
    {
      id: 5,
      name: 'Dianne Russell',
      phoneNumber: '175.914M',
      image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
    },
    {
        id: 6,
        name: 'Jenny Wilson',
        phoneNumber: '175.914M',
        image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
      },
      {
        id: 7,
        name: 'Wade Warren',
        phoneNumber: '175.914M',
        image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg'
      },
      {
        id: 7,
        name: 'Wade Kristin Watson',
        phoneNumber: '175.914M',
        image: 'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg'
      }
  ]
  var createReactClass = require('create-react-class');
  let Contact = createReactClass({
    render () {
      return (
        <li>
          <img src={this.props.image} alt="img"/>   
          <span>{this.props.name}</span>
          <span className="phone">{this.props.phone}</span>
        </li>     
      )
    }
  })
  
  let ContactList = createReactClass({
    getInitialState () {
      return {
        displayedContacts: CONTACTS      
      };
    },
   
    render () {
      let contacts = this.state.displayedContacts;
      return (
        <div className="note">
         
          <ul>
              {
                contacts.map((el) => {
                  return <Contact key={el.id}
                                  name={el.name}
                                  image={el.image}
                                  phone={el.phoneNumber} 
                         /> 
                })
            }          
          </ul>
        </div>     
      )
    }
  });
  
  export default ContactList