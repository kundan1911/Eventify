import React, { Component } from 'react'
import styled from 'styled-components'

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/profile" className="nav-link">
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

