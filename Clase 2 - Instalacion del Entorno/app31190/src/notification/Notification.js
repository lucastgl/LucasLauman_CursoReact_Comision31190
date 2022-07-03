import './Notification.css'
import { createContext, useState, useContext } from "react";


const Notification = ({message, severity}) => {
  
    const notificationStyle ={
      position: 'absolute',
      top: 100,
      right: 5,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'error ' ? 'red' : 'blue',
      padding: '10px 20px 10px 20px',
      color: 'white',
      borderRadius: 5
    }

    if(message === ''){
        return null;
    }
    
    return(
      <div className='Notification' style={notificationStyle}>
        {message}
      </div>
    )
}

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {

    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState();

    const setNotification = (severity, message) =>{
        setMessage(message);
        setSeverity(severity);
        setTimeout(()=>{
            setMessage('')
        }, 5000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () =>{
    return useContext(NotificationContext);
}