import './style.css'
const CardStatus = ({ icon, text}) =>{
    return(
        <div className="cardStatusBox">
            <div className='iconCard'>
                { icon }
            </div>
            <div className='textCard'>
                { text }
            </div>
        </div>
    )
}

export default CardStatus