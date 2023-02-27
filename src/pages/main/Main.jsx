import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Tag from "../../components/tag/Tag";
import "./main.scss"

function Main(){
    return (
        <div>
            <div className="wrapper">
                <Navbar/>
                
                
                <div className="filter__container">
                    <div className="tags__container">
                        <Tag title={"Все"} checked={true}/>
                        <Tag title={"Мясные"} checked={false}/>
                        <Tag title={"Вегетарианская"} checked={false}/>
                        <Tag title={"Гриль"} checked={false}/>
                        <Tag title={"Острые"} checked={false}/>  
                    </div>

                    <div className="sort__container">
                        <img src="/img/icon/sort.svg" alt="sort" />
                        <p>Сортировка по:</p>
                        <div className="sort-span">
                            <span>популярности</span>
                            <div className="underline-dashed"></div>
                        </div>
                    </div>
                </div>


                <div className="title__container">
                    <h1>Все пиццы</h1>
                </div>

                <div className="pizzas__contaner">
                    <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> 
                </div>
            </div>
        </div>
    )
}

export default Main;