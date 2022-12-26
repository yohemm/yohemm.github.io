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

ReactDOM.render(<ProjetPro name="Location de Maison" imgsLink="./public/assets/location/0.png,./public/assets/location/1.png,./public/assets/location/2.png" >Ici est la descripption</ProjetPro>, document.querySelector('#pro #react-pro'))
ReactDOM.render(<div><ProjetPerso name="Journal Du Dév" imgsLink="./public/assets/JDD/0.png,./public/assets/JDD/1.png">Ici est la descripption</ProjetPerso><ProjetPerso name="Histoire de la programmation" imgsLink="./public/assets/histoirProg/0.png,./public/assets/histoirProg/1.png">Site Web avec mini-jeux sur l'histoire de la programmation</ProjetPerso></div>, document.querySelector('#react-pers'))
ReactDOM.render(<div><Formation name="Auto-didacte" date="2016-2022">En apprentissage permanent...</Formation><Formation name="baccalauréat général" date="2020-2022"><p>( NSI, Maths Physique)</p> <p>Mention Assez bien</p></Formation><Formation name="BUT Informatique" date="2022-2024">En cours de formation...</Formation></div>, document.querySelector('#react-forma'))
const svgAnims = document.querySelectorAll(".svg-animate");
for(let svgAnim of svgAnims){    
    for (let i = 0; i < svgAnim.children.length; i++) {
    svgAnim.children[i].style.animationDelay = `${i * 0.25}s`
    svgAnim.children[i].classList.add('path')
    }
}