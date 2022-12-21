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
        this.listImgs = props.imgsLink.split(',');
        console.log(this.listImgs)
    }
    render(){
        
        return <div className="projet-pers">
            <div className="card">
                <div className="front-card face-card" style={{backgroundImage: "url("+ this.listImgs[0]+")"}}>
                    <h4>{this.props.name}</h4>
                </div>
                <div className="back-card face-card" style={this.listImgs.length >= 1?{backgroundImage: "url("+ this.listImgs[1]+")"}:{backgroundImage: "url("+ this.listImgs[0]+")"}}>
                    <p>{this.props.children}</p>
                </div>
            </div>
        </div>
    }
}

class Formation extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        
        return <div className="formation">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="svg-animate"> 
                    <path fill="none" d="M0,0 L0,100"/>
                    <path fill="none" d="M0,100 L100,100" />
                    <path fill="none" d="M100,100 L100,0" />
                    <path fill="none" d="M100,0 0,0" />
                </svg>
                <div className="text">
                    <h4>{this.props.name}</h4>
                    <p className="date">{this.props.date}</p>
                    <p className="desc">{this.props.children}</p>
                </div>
        </div>
    }
}
ReactDOM.render(<ProjetPro name="Location de Maison" imgsLink="./public/assets/JDD/0.png,./public/assets/JDD/1.png,./public/assets/JDD/2.png,./public/assets/JDD/3.png,./public/assets/JDD/0.png" >Ici est la descripption</ProjetPro>, document.querySelector('#pro #react-pro'))
ReactDOM.render(<ProjetPerso name="I Don't know" imgsLink="./public/assets/JDD/0.png,./public/assets/JDD/1.png">Ici est la descripption</ProjetPerso>, document.querySelector('#react-pers'))
ReactDOM.render(<Formation name="Auto-didacte" date="2016-2022">Ici est la descripption</Formation>, document.querySelector('#react-forma'))
const vsgAnim = document.querySelector(".svg-animate");
for (let i = 0; i < vsgAnim.children.length; i++) {
  vsgAnim.children[i].style.animationDelay = `${i * 0.25}s`
  vsgAnim.children[i].classList.add('path')
}