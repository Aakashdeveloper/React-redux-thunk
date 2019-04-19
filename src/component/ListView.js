import React from 'react';
import JSON from '../config/slider_image.json';

// Component
import CardView from './cardView';
import Gallery from './Main_Slider';


class ListView extends React.PureComponent {
    constructor(props){
        super(props);

        this.state={
            imgList:JSON
        }
    }

    componentWillMount(){
        const Uid = Math.floor(Math.random()*100000);
        localStorage.setItem('userId',Uid);
        localStorage.getItem('userId')?localStorage.getItem('userId'):localStorage.setItem('userId',Uid)
    }
  
    componentDidMount(){
        this.props.fetchProperty();
    }
    render(){
        const {list} = this.props;

        return(
            <div>
                <br/>
                <Gallery listImage={this.state.imgList}></Gallery>
                <CardView propertyData={list}></CardView>
            </div>
            
        )
    }

}

export default ListView;