import './index.scss';

const Error() => {

    const data = {
        title: '404 - Not found',
        content:'The page you are looking for cannot be found',
        destination:'/',
        label:'Back to Home'
    }

    return(
       <div className="error">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <a href={data.destination}>{data.label}</a>
       </div>
    )
}

export default Error;