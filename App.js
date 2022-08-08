const root = ReactDOM.createRoot(document.getElementById('root'))

var image_path = "image.png"

// Button main class
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // Click event that will be executed when button clicked
    handleClick() {
        this.props.event()
    }

    render() {
        return (
            <button id={this.props.id} className="simple-button" onClick={this.handleClick}>
                {this.props.text}
            </button>
        )
    }
}

class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <img id={this.props.id} src={this.props.source}/>
    }
}

function App() {
    //Buttons that will be on page
    return <div id="main">
        <Image source={image_path} id="main-image"/>
        <Button id="button-1" text="File" event={ function() { image_path = prompt('Enter file name'); root.render(<App/>) } }/>
        <Button id="button-2" text="Help" event={ function() { alert('Help: Click the "file" button and enter the file name')} }/>
        <div id="empty"></div>
    </div>
}

root.render(<App/>)