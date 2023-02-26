import "./tag.scss"

function Tag({title, checked}){
    return(
        <div className={checked ? "tag-checked" : "tag-unchecked"}>
            <span>{title}</span>
        </div>
    )
}

export default Tag