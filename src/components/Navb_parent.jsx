import React from "react";
import Navb from "./../components/Navb";

class Navb_parent extends React.Component {
    render() {
        return (
            <div>
                <Navb name="Все"/>
                <Navb name="Новые"/>
                <Navb name="Развлечения"/>
                <Navb name="Еда"/>
                <Navb name="Здоровье"/>
                <Navb name="Красота"/>
                <Navb name="Спорт"/>
                <Navb name="Туризм, отели"/>
                <Navb name="Услуги"/>
                <Navb name="Товары"/>
            </div>
        );
    }
}

export default Navb_parent;