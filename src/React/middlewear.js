export default function addId() {
    return next => action => {
     //if(!action.general) return next(action)
     next({
      ...action,
      payload: {
        ...action.payload,
        id: Math.floor(Math.random()* 1000)
      }
     })
       console.log('Осуществляется отправка: ', action)
    
    }
  }