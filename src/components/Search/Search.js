import React, {Component} from 'react';
import styles from './Search.module.css'

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }

    handleFilter = (event) => {
        this.setState(()=>({
            type: event.target.dataset.type
        }),()=>{this.props.searchMovies(this.state.search,this.state.type)})
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search,this.state.type)
        }
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    handleClick = (event) => {
        this.props.searchMovies(this.state.search,this.state.type)
    }

    render() {
        return (
            <div className="row">
                <input id="email_inline"
                       className="validate"
                       type="search"
                       placeholder="Search"
                       value={this.state.search}
                       onChange={this.handleChange}
                       onKeyDown={this.handleKey}
                />
                <button className="btn right"
                        onClick={this.handleClick}
                >Search
                </button>
                <div>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type="all"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type="series"
                               onChange={this.handleFilter}
                               checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;