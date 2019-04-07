import ActionTypes from '../Constant';

const INITIAL_STATE = {
//    for login
    LoginSuccessFull:'',
    userDetail:{},
    spaining:true,
    isSignedIn:false,
    // blood bank
    GroupList: [],
    MoreGroup:"",
    RequestShown:'',
    AdminOrNot:"",
    ToBecomeAdminList:'',
    ToBecomeDonorList:'',
    AdminListShown:"",
    Lenght:"",
    // Message
    MessageType:'',
    Message:'',
    // Campus
    userExist:"",
    UsertypeExist:"",
    userData:"",
    AdminIsUser:"",
    AdminAccpetJob:'',
    AdminAccpetAdmin:'',
    AccpetUser:'',
    AccpetCompany:"",
    AllFelids:"",
    IT:"",
    Acc:"",
    Other:"",
    PostedJobExist:'',
    PostedJobList:[],
    RequestToBecome:"",
    RequestDetails:[],
    RequestType:'',
    StudentListExist:"",
    update:[],
    // Data
    Admin:[],
    UserList:{},
    JobList:[],
    block:[],
    Unblock:[]

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.Group:
          
        return ({
                ...state,
                GroupList : action.payload,
            })


            case ActionTypes.Message:
            return ({
                ...state,
                MessageType: action.payload,
                Message: action.more,
            })

            case ActionTypes.SumbitUser:
            return ({
                ...state,
                MessageType: action.payload,
                Message: action.more,
                UserList : action.uid,
            })


            case ActionTypes.Request:
            return ({
                ...state,
                RequestShown:action.payload,
                Lenght:action.more
            })

            case ActionTypes.Lenght:
            
            return({
                    ...state,
                    Lenght:(state.Lenght-action.payload)
            })

            case ActionTypes.UesrExist:
            
            return({
                    ...state,
                    UesrExist:action.payload
            })

          case ActionTypes.LoginSuccessFull:
            return ({
                ...state,
                 LoginSuccessFull : action.payload ,
                 userDetail:action.more
            })

            case ActionTypes.ToBecomeList:
            return ({
                ...state,
                 ToBecomeDonorList : action.payload ,
                 ToBecomeAdminList : action.more
            })


            case ActionTypes.isSignfalse:
            return ({
                ...state,
                 isSignedIn : action.payload 
            })


            case ActionTypes.isSignture:
            return ({
                ...state,
                 isSignedIn : action.payload 
            })



            case ActionTypes.TODO:
            return ({
                ...state,
                todo: state.todo.concat(action.payload),
                flag: state.flag
            })


            case ActionTypes.AdminOrNot:
            
            return ({
                ...state,
                AdminOrNot: action.payload,
            })



        case ActionTypes.DELETEALLTODO:
        return ({
                Message: action.payload,
                MessageType: action.more
            })


         case ActionTypes.ToBecomeDonor:
             return ({
                ...state,
                // spaining: action.index,
             })


        case ActionTypes.UPDATETODO:
            state.todo[action.index].todo = action.payload
            state.todo[action.index].flag = true
            return ({
                ...state,
                todo: state.todo.concat()
            })


            case ActionTypes.AdminListShown:
            return ({
                ...state,
                AdminListShown: action.payload
            })

            case ActionTypes.ForData:
            return ({
                ...state,
                spaining:false
            })

 
            // Campus
            case ActionTypes.CheckUserExist:
            return ({
                ...state,
                userExist:action.payload,
                userData:action.me,

            })

            case ActionTypes.BloclList:
            return ({
                ...state,
                block:action.uid,
                Unblock:action.data,

            })

            case ActionTypes.BLOCK:
            return ({
                ...state,
                MessageType:action.payload,
                Message:action.more,
            
            })

            case ActionTypes.UserType:
            return ({
                ...state,
                userData:action.payloadMore,
                UsertypeExist:action.payload
            })
            
            case ActionTypes.AllData:
            return ({
                ...state,
                Admin:action.payload,
                AdminAccpetJob:action.Accpet,
                UserList:action.UserList,
                JobList:action.JobList,
            })
            
            
            case ActionTypes.StudentList:
            return ({
                ...state,
                StudentListExist:action.more,
            })



            case ActionTypes.RequestToBecome:
            return ({
                ...state,
                RequestToBecome:action.payload,
                RequestDetails:action.more,
                RequestType : action.ofType
            })

            case ActionTypes.AdminFunction:
            return ({
                ...state,
                AdminIsUser:action.payload,
                AdminAccpetAdmin:action.paymore,
                AdminAccpetJob:action.more,
                AccpetCompany:action.Company,
                AccpetUser : action.Student,
                update : action.update,
            })


            case ActionTypes.StudentFunction:
            return ({
                ...state,
                IT:action.more,
                Acc:action.paymore,
                Other:action.morepay,
            })

            case ActionTypes.Posted_Shown:
            return ({
                ...state,
                PostedJobExist:action.payload,
                PostedJobList:action.more,
            })



        default:
            return state;
    }
}