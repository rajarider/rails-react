class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
             value: '',
            formData: false };

    }

    handleChange(event) {

        this.setState({ value: event.target.value });
        
    }

    handleSubmit(event) {

        event.preventDefault();

        this.setState({ formData: true });

        
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
              <input type="text" onChange={this.handleChange.bind(this)} />
                </label>
                <button>submit</button>
            </form>
            {this.state.formData ? this.state.value : ""}
            </div>
        );
    }
}