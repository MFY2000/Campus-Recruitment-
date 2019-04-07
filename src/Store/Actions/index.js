import ActionTypes from '../Constant';
import * as firebase from 'firebase';
import '../../config'






export function Login(detail) {
    return dispatch => {
        const object ={  
        displayName : detail.displayName,
        uid : detail.uid,
        photoURL : detail.photoURL,
        email : detail.email,
        phoneNumber : detail.phoneNumber,}
  
        
        dispatch({ type: ActionTypes.LoginSuccessFull, payload: object.uids ,more:object })

        }
    
}

export function isSignfalse() {
    return dispatch => {
        
        dispatch({ type: ActionTypes.isSignfalse, payload: false })

        }
    
}
export function isSignture() {
    return dispatch => {
        
        dispatch({ type: ActionTypes.isSignture, payload: true })

        }
    
}




export function forGroupList(Group,uid) {
if(Group!==''&&Group!==null&&Group!==undefined){
  
    return dispatch => {
        firebase.database().ref('/').child("/User/GroupsList/").on('value', snapshot => {
        const todosObj = snapshot.val()===null ? {} : snapshot.val();
        const Donarlist = {List:[],key:[]}        
        Group.map((index,value)=>{
        const Donar = todosObj[index]
        for (let key in Donar) {
        if(key!==uid){      
      Donarlist.List.push(Donar[key])
        Donarlist.key.push(key)
        }
}
  

        })

        dispatch({ type: ActionTypes.Group, payload: Donarlist})
         })
    }}
else{return dispatch => {
    dispatch({ type: ActionTypes.Message,payload:"error",more:"Please Select a Group"})
}}

}





export function Request(requset,user) {
    return dispatch => {

firebase.database().ref(`/User/request/${requset.uid}/${user.uid}/`).set(user);
firebase.database().ref(`/User/request/`).child(`${user.uid}/${requset.uid}/`).set(requset)

        dispatch({ type: ActionTypes.Message,payload:'success',more:'Your Request is Sent Succesfull' })
    }

}









export function forBecomeDonar( Data , uid) {
    return dispatch => {
        firebase.database().ref('/user/GroupList').child(`${uid}`).set(Data);
        dispatch({ type: ActionTypes.AddUser, })
    }

}

export function messageShow(type,message) {
    return dispatch => {
        dispatch({ type: ActionTypes.Message,payload:type ,more:message  })
    }

}

export function important() {
    return dispatch => {
        firebase.database().ref('/').on('value', snapshot => {
            const todosObj = snapshot.val()===null ? {} : snapshot.val();
const AdminData = todosObj.Admin!== undefined && todosObj.Admin !== null ? todosObj.Admin : [];;    
const UserData = todosObj.User.List !== undefined && todosObj.User.List !== null ? todosObj.User.List : [];;
const JobData = UserData.Jobs !== undefined && UserData.Jobs !== null ? UserData.Jobs : []; 
const Accpet = AdminData.PostJob !== undefined && AdminData.PostJob !== null ? AdminData.PostJob : [];  
        dispatch({ type: ActionTypes.AllData, payload:AdminData,UserList:UserData,JobList:JobData ,Accpet:Accpet })
            
            })}}



export function ToBecomeAdmin(details) {
    return dispatch => {
      const uid = details.userDetail.uid 
            firebase.database().ref('/').child("Admin/ToBecome/Admin/").child(uid).set(details)  
            dispatch({ type: ActionTypes.AdminList, payload: true})
    
}}

export function ToBecomeList() {
    return dispatch => {
firebase.database().ref('/').child("Admin/ToBecome/").on('value', snapshot => {
const todosObj = snapshot.val()===null ? {} : snapshot.val();

const Donar = todosObj.Donar
const Admin = todosObj.Admin

const Donarlist = {List:[],key:[]}
const Adminlist = {List:[],key:[]}



for (let key in Donar) {
    Donarlist.List.push(Donar[key])
    Donarlist.key.push(key)

}

for (let key in Admin) {
    Adminlist.List.push(Admin[key])
    Adminlist.key.push(key)

}
dispatch({ type: ActionTypes.ToBecomeList, payload: Donarlist,more:Adminlist })

})}}
   


export function AdminOrNot(uid) {
    return dispatch => {
        firebase.database().ref('Admin/AdminList/').child(uid).on('value', snapshot => {
            const todosObj = snapshot.val();
            const obj = todosObj !== null ? true : false;
               dispatch({ type: ActionTypes.AdminOrNot, payload: obj })
            })
        }
    }
    export function RequestShow(uid) {
        return dispatch => {
            firebase.database().ref('/User/').child(`request/${uid}/`).on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj !== null ? todosObj : {};
                const ShowList = {List:[],key:[]}
                var lenght = 0
    
    for (let key in obj) {
        ShowList.List.push(obj[key])
        ShowList.key.push(key)
        if(obj[key].seen !== true){
         lenght = (lenght+1)
        }
    
    }
                   dispatch({ type: ActionTypes.Request, payload: ShowList,more:lenght })
                })
            }
        }
        
    
        export function AccpetAdmin(ui) {
            return dispatch => {
            const uid = ui.uid
                firebase.database().ref('/').child("Admin/ToBecome/Admin/").child(uid).remove()  
                firebase.database().ref('Admin/AdminList/').child(uid).set(ui)
                    
                    
                       dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                }
            }


            export function PresonCancelRequest(preson) {
                return dispatch => {
                    const UserUid = preson.PresonWhichRequiredBlood 
                    const PresonUid = preson.uid
                    firebase.database().ref('/').child(`/User/request/${PresonUid}`).child(UserUid).remove()  
                    firebase.database().ref('/').child(`/User/request/${UserUid}`).child(PresonUid).remove()  
                        
                        
                           dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                    }
                } 
    
                export function AccpetRequestPreson(preson) {
                    return dispatch => {
                        const UserUid = preson.PresonWhichRequiredBlood 
                        const PresonUid = preson.uid

    firebase.database().ref('/').child(`/User/request/${PresonUid}`).child(UserUid).child("type").set("Accpet")  
    firebase.database().ref('/').child(`/User/request/${UserUid}`).child(PresonUid).remove()  
                            
                            
                               dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                        }
                    } 
                               
    
    export function AccpetDonar(uid,details) {
            return dispatch => {
             const id = details.userDetail.uid
             const Group = details.MoreAboutUser.Group
             firebase.database().ref('User/GroupsList/').child(Group).child(id).set(details)
             firebase.database().ref('/').child("Admin/ToBecome/Donar").child(uid).remove()  
             dispatch({ type: ActionTypes.NONE, payload: 'obj' })
                 
             }
         }

         
         export function SeenRequest(user,preson) {
             return dispatch => {
                 firebase.database().ref(`User/request/${user}/${preson}/seen/`).set(true)  
                 dispatch({ type: ActionTypes.Lenght, payload: 1 })
                 
             }
         }

         
         export function UserExist(user) {
            return dispatch => {
            firebase.database().ref(`User/GroupsList/${user}`).on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj === null ? true : false ;
                dispatch({ type: ActionTypes.UesrExist, payload: obj })
            })     
             }
         }

         export function AdminListShown() {
            return dispatch => {
            firebase.database().ref('Admin/AdminList/').on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj !== null ? todosObj : {};
                const ShowList = []
    
    
    
    for (let key in obj) {
        ShowList.push(obj[key])
        
    }
                   dispatch({ type: ActionTypes.AdminListShown, payload: ShowList })
                })
            }
        }


// Campus

export function CheckUserExist(uid,val) {
    return dispatch => {
        const v = val
        const todosObj = val === null || val === undefined ? {} : val
        const obj = todosObj[uid] !== null && todosObj[uid] !== undefined ? true : false ;
        const more = obj ? todosObj[uid] : ''
            dispatch({ type: ActionTypes.CheckUserExist, payload: obj , me: more })
    }

}

export function SumbitUser(uid,data,List) {
    const type = List
    type[uid] = data
    return dispatch => {
        firebase.database().ref(`/User/List/${uid}/`).set(data)  
        
     dispatch({ type: ActionTypes.SumbitUser ,payload:'success', more : "Your Request has been sent" , uid:type })
     
     }
    }


    
    export function blockList(value) {
        
        return dispatch => {
            var Block = []
            var UnBlock = []
            for(let key in value) {
                if(value[key].status !== "Block"){
                    Block.push(value[key])
                }
                else{UnBlock.push(value[key])}
            }
                dispatch({ type: ActionTypes.BloclList , uid:Block , data:UnBlock  })
            }
         
         
        }



    export function block(uidss,data) {
        const type = data
        return dispatch => {
            firebase.database().ref(`/User/List/${type}/status`).set("Block")  
            
         dispatch({ type: ActionTypes.Message ,payload:'success', more : "User Have Been Block" })
         
         }
        }

        export function unblock(uidss,data) {
            const type = data
                return dispatch => {
                firebase.database().ref(`/User/List/${type}/status`).remove()  
                
             dispatch({ type: ActionTypes.Message ,payload:'success', more : "User Have Been Unblock" })
             
             }
            }

    export function UpdateJob(uid,data) {
        const obk = {uid,data}
        return dispatch => {
            
            firebase.database().ref(`Admin/ToBecome/Update/${data.uid}/`).set(obk)  
            
         dispatch({ type: ActionTypes.Message ,payload:'success', more : "Your Request has been sent" ,})
         
         }
        }
    

    export function UpdateUser(uid,data,Type) {
        const type = Type
        return dispatch => {
            
            firebase.database().ref(`Admin/ToBecome/${type}/${uid}/`).remove()  
            firebase.database().ref(`Admin/ToBecome/${data.Type}/${uid}/`).set(data)  
            
         dispatch({ type: ActionTypes.Message ,payload:'success', more : "Update has been Done Successfull" ,})
         
         }
        }
     
    
    export function PostJob(uid,data) {
        return dispatch => {
            
            firebase.database().ref(`Admin/PostJob/${uid}`).set(data)  
            
            dispatch({ type: ActionTypes.Message,payload:'success',more:'Your Request is Sent Succesfull' })
         }
        }



        export function DelecteAccount(data) {
          const {feilds , val , user , uid} = data
            if(user==="Company"){
          return dispatch => {
                
                firebase.database().ref(`User/Jobs/${feilds}/${val}`).remove()
                firebase.database().ref(`User/${uid}`).remove()
                         
                dispatch({ type: ActionTypes.Message,payload:'info',more:'Your Account Have Been Delecte' })
             }}

     else{     
     return dispatch => {
       
     firebase.database().ref(`User/${uid}`).remove()
                         
  dispatch({ type: ActionTypes.Message,payload:'info',more:'Your Account Have Been Delecte' })
}
}
}
            
    export function Adminfunction(uid) {
        return dispatch => {
            firebase.database().ref('Admin/').on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj.AdminList[uid] !== null && todosObj.AdminList[uid] !== undefined? true : false;
               const More =todosObj["ToBecome"]
              var PostedJob = '', AccpetStudent='' , AccpetCompany='' , Tobecomeadmin = '' , updateFollowing = '';
            if(obj){
             PostedJob = todosObj.PostJob !== null && todosObj.PostJob !== undefined ? todosObj.PostJob : [] ;
             Tobecomeadmin = todosObj.BecomeAdmin !== null && todosObj.BecomeAdmin !== undefined ? todosObj.BecomeAdmin : [] ;
             if(More!==undefined&&More!==null){
             AccpetStudent = More['Student'] !== null && More['Student'] !== undefined ? More['Student'] : [] ;
             AccpetCompany = More['Company'] !== null && More['Company'] !== undefined ? More['Company'] : [] ;
             updateFollowing = More['Update'] !== null && More['Update'] !== undefined ? More['Update'] : [] ;
            }
               } 

       dispatch({ type: ActionTypes.AdminFunction, payload: obj , more : PostedJob , paymore : Tobecomeadmin , Student:AccpetStudent , Company : AccpetCompany,update:updateFollowing})
    })
            }
        }

 


        export function StudentList(uid) {
            return dispatch => {
                firebase.database().ref('User/Type').on('value', snapshot => {
                    const todosObj = snapshot.val();
                    const obj = todosObj !== null && todosObj !== undefined ? true : false;
                    var Student = [] ;
                
                    if(obj){
                 Student = todosObj !== null && todosObj !== undefined  ? todosObj : [] ;

                   } 
           dispatch({ type: ActionTypes.StudentList, more : Student   })
        })
                }
            }



        export function Studentfunction(uid) {
            return dispatch => {
                firebase.database().ref('User/Jobs').on('value', snapshot => {
                    const todosObj = snapshot.val();
                    const obj = todosObj !== null && todosObj !== undefined ? true : false;
                    var IT = [] , Acc = [] , other=[];
                
                    if(obj){
                 IT = todosObj.IT !== null && todosObj.IT !== undefined  ? todosObj.IT : [] ;
                 Acc = todosObj.Acc !== null && todosObj.Acc !== undefined ? todosObj.Acc : [] ;
                 other=todosObj.Other !== null && todosObj.Other !== undefined ? todosObj.Other : [] ;
                   } 
           dispatch({ type: ActionTypes.StudentFunction, payload: obj , more : IT , paymore : Acc , morepay:other  })
        })
                }
            }
        
            export function cancel(details) {
                return dispatch => {
                const Type = `/Admin/PostJob/${details.props.Details.uid}` 
            
                firebase.database().ref(Type).remove()  
                dispatch({ type: ActionTypes.Message, payload: 'info' , more:"Delect Request Completly" })
                    
                }
            }

            export function cancelBoth(Type) {
                return dispatch => {
                firebase.database().ref(Type).remove()  
                dispatch({ type: ActionTypes.Message, payload: 'info',more:"Delect Request Complete" })
                    
                }
            }
                        

export function AccpetBoth(details,MoreUrl,oldUrl,NewUrl) {
    const Type = oldUrl
    const NewType = NewUrl
    const NType = MoreUrl
if(NewType !== ''){

    return dispatch => {
    firebase.database().ref(NType).remove()  
    firebase.database().ref(NewType).set(details)
    firebase.database().ref(Type).set(details)

    dispatch({ type: ActionTypes.Message, payload: 'info' , more:"Accpet Request Succesfull" })
}
}        
else{
     return dispatch => {
        firebase.database().ref(NType).remove()  
        firebase.database().ref(Type).set(details)  
        dispatch({ type: ActionTypes.Message, payload: 'info' , more:"Accpet Request Succesfull" })
    
    }
}
}




export function AccpetJob(details,type) {
   const uid = details.Details.uid
   debugger
    return dispatch => {
   var keys = firebase.database().ref().push().key 

    firebase.database().ref(`User/Jobs/${type}/${keys}`).set(details) 
    firebase.database().ref(`User/List/${uid}/PostJob/${keys}`).set(details) 
    firebase.database().ref(`Admin/PostJob/${uid}`).remove() 
    dispatch({ type: ActionTypes.Message, payload: 'info',more:"Accpet Request" })
        
    }
}



export function AdminBecome(details) {
    const uid = details.uid
     return dispatch => {
 
     firebase.database().ref(`Admin/BecomeAdmin/${uid}/`).set(details) 
     dispatch({ type: ActionTypes.Message, payload: 'info' , more:"To Become Admin Request Sent" })
          
     }
 }
 

 export function AdminAccpet(details) {
     const uid = details.uid
     return dispatch => {
         firebase.database().ref(`Admin/AdminList/${uid}/`).set(details) 
        firebase.database().ref(`Admin/BecomeAdmin/${uid}/`).remove() 
 
     dispatch({ type: ActionTypes.Message, payload: 'info' , more:"You Accpet an Admin" })
         
     }
 }
 

 export function PostedJobShow(details) {
    return dispatch => {
       firebase.database().ref(`User/${details}/PostJob`).on('value', snapshot => {
           const todosObj = snapshot.val();
           const obj = todosObj !== null && todosObj !== undefined ? true : false
           var Posted_show = []

           if(obj){
             Posted_show = todosObj 
         }
    dispatch({ type: ActionTypes.Posted_Shown, payload: obj , more : Posted_show })
       })
    }
}

export function DelectJob(uid,val,feilds) {
    return dispatch => {
       firebase.database().ref(`User/${uid}/PostJob/${val}`).remove()
       firebase.database().ref(`User/Jobs/${feilds}/${val}`).remove()
          dispatch({ type: ActionTypes.Message, payload: "success" , more : "Delecte Jobs Complete" })
    
    }
}

export function RequestToBecome(details) {
    return dispatch => {
       firebase.database().ref(`Admin/ToBecome/`).on('value', snapshot => {
           const todosObj = snapshot.val();
           var obj = false, array = {} , type = ''
            
           for (let key in todosObj) {
            const val = todosObj[key]
            const c = val[details]
            if(c!==undefined&&c!==null){
                   obj = true ;
                   array = c;
                   type = c.Type

                }
            }
        
    dispatch({ type: ActionTypes.RequestToBecome, payload: obj , more : array , OfType : type })
       })
    }
}



 