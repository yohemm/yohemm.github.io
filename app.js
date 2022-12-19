class SpanImage extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return <span className={"images-pro " + this.props.index} style={{'background-image': "url("+ this.props.img+ ")"}}></span>;
    }
}
class ProjetPro extends React.Component {
    constructor (props){
        super(props);
        this.listImgsprops = props.imgsLink.split(',');
        console.log(this.listImgsprops)
        this.spanImager = [];
    }
    render(){
        for(let i = 1; i < this.listImgsprops.length; i++){
            console.log(i)
            this.spanImager.push(<SpanImage  img={this.listImgsprops[i]} index={i-1}></SpanImage>)
        }
        console.log(this.spanImager)
        return <div className="projet-pro" style={{'background-image': "url("+ this.listImgsprops[0] + ")"}}>
            <div className="images-container">{this.spanImager}</div>
            <h4>{this.props.name}</h4>
            <p>
                {this.props.children}
            </p>
            
        </div>;
    }
}
ReactDOM.render(<ProjetPro name="Location de Maison" imgsLink="https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/11805639/pexels-photo-11805639.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" >Ici est la descripption</ProjetPro>, document.querySelector('#pro #reactPro'))