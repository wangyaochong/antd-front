import User from './user';

export default (props) => {
    return (
        <div>
            <User/>
            <div style={ { padding: 20 } }> { props.children }</div>
        </div>

    );
}
