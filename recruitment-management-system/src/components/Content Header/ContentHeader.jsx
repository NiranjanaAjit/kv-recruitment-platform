import "../Content Header/ContentHeader.scss"

const ContentHeader = ({title})=>{
    return (
        <div className="header-container">
            <div className="header-underline"><h1 className="header-title">{title}</h1></div>
            
        </div>

    )
}

export default ContentHeader;