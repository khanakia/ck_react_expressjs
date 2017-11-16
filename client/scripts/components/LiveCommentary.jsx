import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { inject, observer } from 'mobx-react';

@observer
class LiveCommentary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    // static defaultProps = {
    //     item: {}
    // }

    
    xdec = (e) => { 
        var v = ""
        try { 
            v = atob(e.substring(2)) 
        } catch (n) { 
            v = "" 
        } 
        return v 
    }

    componentDidMount() {
        setTimeout(function(){
            if(typeof mousetrapGlobal !== "undefined") {
                console.log("Reset mouse")
                mousetrapGlobal.reset()
            }
        },2000)

        var config = {
          apiKey: "apiKey",
          authDomain: "cbmfu-5a56b.firebaseapp.com",
          databaseURL: "https://cbmfu-5a56b.firebaseio.com",
          storageBucket: "cbmfu-5a56b.appspot.com"

        };

        firebase.initializeApp(config);
        // console.log(firebase.apps.length)
        // if(firebase.apps.length) {
        // firebase.app().delete().then(function() {
        //     firebase.initializeApp(config);
        // });
        // }

        // var rootRef = firebase.database().ref();

        this.t = firebase.database().ref("/lval");
        this.t.on("value", (e) =>  { 
            var a = this.xdec(e.val());
            var item = JSON.parse(a)
            console.log(JSON.parse(a));
            this.setState({
                item: item
            })
        })
    }

    componentWillUnmount() {
        firebase.app().delete()
        // firebase.database().goOffline()
        
        console.log('Umounted')
    }


    getCommentaryTItle(value) {
        if(value=="B") return 'Ball Start'
        if(value=="TU") return '3rd Umpire'
        if(value=="NO") return 'Not Out'
        if(value=="0") return 'Khali'
        if(value=="1") return 'Single'
        if(value=="4") return  'Four'
        if(value=="6") return  'Sixer'
        if(value>0) return  value + ' Runs'
    }
    
    
    renderSessionItems(items) {
        if(typeof items=="undefined") return null;
        return items.map((item, i) => {
            return (
                <tr key={'key_'+i}>
                    <td>{item.Name} </td>
                    <td className="skyblue w-70p">{item.Back}</td>
                    <td className="pink w-70p">{item.Lay}</td>
                </tr>
            )
        })
    }

    render() {
        const item = this.state.item
        return (
            <div className="">
                <div className="liveCommentaryBox">
                    <h6 className="heading">RRR: {item.RRR}</h6>
                    <table className="table table-dark mb-0">
                        <tbody>
                            <tr className="bg-warning color-dark font-weight-bold">
                                <td>CRR : {item.CRR} </td>
                                <td>SRR : {item.SRR}</td>
                            </tr>
                            <tr className="bg-dark font-weight-bold">
                                <td>{item.SCORE} </td>
                                <td>
                                    {this.getCommentaryTItle(item.COMM)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table font-weight-bold">
                        <tbody>
                            {this.renderSessionItems(item.Sessions)}
                            {/*<tr>
                                <td>{item.TITLE} </td>
                                <td className="skyblue w-70p">{item.BACK}</td>
                                <td className="pink w-70p">{item.LAY}</td>
                            </tr>
                            <tr>
                                <td>{item.LAMBI} </td>
                                <td className="skyblue w-70p">{item.LAMBI_BACK}</td>
                                <td className="pink w-70p">{item.LAMBI_LAY}</td>
                            </tr>*/}
                        </tbody>
                    </table>

                    <h6 className="heading">Recent: {item.RECENT}</h6>
                </div>
            </div>
        );
    }
}

export default LiveCommentary;
