import * as React from 'react';
import './search.css';

interface Props {
    onChange: (value: string) => void,
    history: any
}

interface State {
    value: string
}

class Search extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        if (this.state.value !== '') {
            this.props.onChange(this.state.value);
        }
    }
    
    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSubmit} className="search__form">
                    <div className="search__field-box">
                        <input 
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            className="search__field" 
                            placeholder="Search movie" 
                        />
                    </div>
                    <div className="search__button-box">
                        <button type="submit" className="search__button">
                            Поиск
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;