import { useReducer } from 'react';
const initialState = {
    name: '',
    email: '',
    pass: '',
    condition: false,
};
function reducer(state, action) {
    if (action.type === 'setname') {
        return { ...state, name: action.value };
    } else if (action.type === 'setemail') {
        return { ...state, email: action.value };
    } else if (action.type === 'setpassword') {
        return { ...state, pass: action.value };
    } else if (action.type === 'SUBMIT') {
        return { ...state, condition: true };
    } else {
        return state;
    }
}
function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'SUBMIT' });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={state.name} onChange={(e) => dispatch({ type: 'setname', value: e.target.value })}
                />
                <br /><br />
                <input type="email" placeholder="email" value={state.email} onChange={(e) => dispatch({ type: 'setemail', value: e.target.value })}
                />
                <br /><br />
                <input type="password" placeholder="password" value={state.pass} onChange={(e) => dispatch({ type: 'setpassword', value: e.target.value })}
                />
                <br /><br />
                <input type="submit" value="create" />
                {state.condition && (
                    <>
                        <h1>My name is {state.name}</h1>
                        <h1>My email is {state.email}</h1>
                        <h1>My password is {state.pass}</h1>
                    </>
                )}
            </form>
        </div>
    );
}
export default Reducer;