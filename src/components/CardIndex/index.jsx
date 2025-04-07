import './style.css'

const CardIndex = ({ icon, title, description}) =>{
    return(
        <div className="card-index-container">
            <div className='iconCard'>
                { icon }
            </div>
            <p className="title-card">{ title }</p>
            <p className="description-card">{ description }</p>
        </div>
    )
}

export default CardIndex