import React from "react";
import ReactDOM from "react-dom";
import * as allList from "./data/index";
import _ from "lodash";
class Search extends React.Component {
    constructor() {
        super();
        const {beautyList, facialMask, medicinal, others, skinCare} = allList;
        const productList = [...beautyList, ...facialMask, ...medicinal, ...others, ...skinCare];
        this.state = {
            productList: productList,
            type: "all",
            key: ""
        }
    }
    getShowList() {
        const key = this.state.key;
        let originList = [];
        let showList = [];
        if (this.state.type === "all") {
            originList = this.state.productList;
        } else {
            originList = allList[this.state.type];
        }
        if (key === "") {
            showList = originList;
        } else {
            showList = _.filter(originList, function (item) {
                return item.name.indexOf(key) !== -1 || item.series.indexOf(key) !== -1;
            });
        }
        return showList;
    }
    render() {
        const showList = this.getShowList();
        return (
            <div className="priceTable" hash="#search">
                <div className="searchBar">
                    <input ref="searchKey" />
                    <button onClick={() => { this.setState({ key: this.refs.searchKey.value }) } } >搜索</button>
                    <select onChange={(e) => { this.setState({ type: e.target.value }); } }>
                        <option value="all">全部</option>
                        <option value="beautyList">美妆</option>
                        <option value="skinCare">护肤</option>
                        <option value="facialMask">面膜</option>
                        <option value="medicinal">药品</option>
                        <option value="others">其他</option>
                    </select>
                </div>
                <div>{`共${showList.length}结果`}</div>
                <div className="productList">
                    {
                        showList.map((item) => {
                            return (
                                <div className="table">
                                    <div className="img">
                                        <img src={`..\\img\\${item.imgName}`} />
                                    </div>
                                    <div className="detail">
                                        <div className="series">品牌：{item.series}</div>
                                        <div className="name">品名：{item.name}</div>
                                        <div className="price">价格：{item.price}</div>
                                        <div className="intro">介绍：{item.intro}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Search />, document.getElementById("search"));
