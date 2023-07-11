import React from 'react'
import PropTypes from 'prop-types'
function Tool(props){
const {blogs,contacts,login}= props;
const defaultBlogs = "No Blogs";
const defaultContacts = "No Contact";
const defaultLogin = "Sign Up";

let displayValue = null;
if (blogs) {
  displayValue = blogs;

} else if (contacts) {
  displayValue = contacts;
  
} else if(login) {
  displayValue = login;
 
}
else if(!blogs){

displayValue = defaultBlogs
}
else if(!contacts){

  displayValue = defaultContacts
  }
else if(!login){

    displayValue = defaultLogin
    }
    
  return (
    <>
   <span> {displayValue}</span>
    </>
  );
}

Tool.propTypes = {
  blogs: PropTypes.string,
  contacts: PropTypes.string,
  login: PropTypes.string,
};




export default Tool