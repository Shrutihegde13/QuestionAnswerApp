import React from 'react';
import {Route} from 'react-router-dom';
import auth0CLient from '../Auth';


function SecuredRoute(props){

   const {component:Component,path} =props;

   return (
       <Route path = {path} render={() =>
       {
           if(!auth0CLient.isAuthenticated()){

               auth0CLient.signIn();
               return <div></div>
           }
            return <Component />
       
       } }/>

   );
}

export default SecuredRoute;