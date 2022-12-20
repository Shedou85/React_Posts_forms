import React, {useState} from 'react'
import Button from './Button'

const CreatUser = ({create}) => {

   const [newUser, setNewUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
   })     
   const addNewUser = (e) => {
      e.preventDefault();
      const newPost = {
         ...newUser, id: Date.now()
      }
      create(newPost)
      setNewUser({
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         country: '',
         city: '',
      })
   }
   
   return (
      <div className='form_container'>
         <form>
         <div className='user_creation_form_item_label'>First Name</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='firstName'
            value={newUser.firstName}
            onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
            />
         </div>
         <div className='user_creation_form_item_label'>Last Name</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='lastName'
            value={newUser.lastName}
            onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
            />
         </div>
         <div className='user_creation_form_item_label'>Email</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='email'
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            />
         </div>
         <div className='user_creation_form_item_label'>Phone</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='phone'
            value={newUser.phone}
            onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
            />
         </div>
         <div className='user_creation_form_item_label'>Country</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='country'
            value={newUser.country}
            onChange={(e) => setNewUser({...newUser, country: e.target.value})}
            />
         </div>
         <div className='user_creation_form_item_label'>City</div>
         <div className='user_creation_form_item_input'>
            <input type='text' 
            className='user_creation_form_item_input'
            name='city'
            value={newUser.city}
            onChange={(e) => setNewUser({...newUser, city: e.target.value})}
            />
         </div>
         <Button onClick={addNewUser}>Creat User</Button>
      </form>
      </div>
      
   )
}

export default CreatUser