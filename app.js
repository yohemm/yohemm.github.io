class SpanImage extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return <span className={"images-pro i" + this.props.index} style={{backgroundImage: "url("+ this.props.img+ ")"}}></span>;
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
            this.spanImager.push(<SpanImage  img={this.listImgsprops[i]} index={i-1} key={i-1}></SpanImage>)
        }
        console.log(this.spanImager)
        return <div className="projet-pro" style={{backgroundImage: "url("+ this.listImgsprops[0] + ")"}}>
            <div className="images-container">{this.spanImager}</div>
            <div className="text" >
                <div><h4>{this.props.name}</h4></div>
                <div>
                    <p>
                    {this.props.children}
                    </p>
                </div>
            </div>
            
        </div>;
    }
}

class ProjetPerso extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        
        return <div className="projet-pers">
            <div className="Front-card">
                <h4>{this.props.name}</h4>
            </div>
            <div>
                <p>{this.props.children}</p>
            </div>
        </div>
    }
}

class Formation extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        
        return <div className="Formation">
                <h4>{this.props.name}</h4>
                <p>{this.props.date}</p>
                <p>{this.props.children}</p>
        </div>
    }
}
ReactDOM.render(<ProjetPro name="Location de Maison" imgsLink="./public/assets/JDD/0.png,./public/assets/JDD/1.png,./public/assets/JDD/2.png,./public/assets/JDD/3.png,./public/assets/JDD/0.png" >Ici est la descripption</ProjetPro>, document.querySelector('#pro #reactPro'))
ReactDOM.render(<ProjetPerso name="I Don't know" >Ici est la descripption</ProjetPerso>, document.querySelector('#reactPers'))
ReactDOM.render(<Formation name="Auto-didacte" date="2016-2022">Ici est la descripption</Formation>, document.querySelector('#reactForma'))