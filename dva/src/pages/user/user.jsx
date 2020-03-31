import { connect } from 'dva';
import{ BrowserRouter} from 'umi'

// function User({ user, dispatch }) {
//     return (
//         <div>
//             userName{ user?.name }
//             <button onClick={ () => {
//                 dispatch({ type: 'user/changeName' });
//             } }>变名字
//             </button>
//         </div>
//     );
// }
function User(props) {
    let {user,dispatch}=props;
    return (
        <div>
            userName{ user?.name }
            <button onClick={ () => {
                dispatch({ type: 'user/changeName' });
            } }>变名字
            </button>

        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(User);
