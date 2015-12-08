import React, { PropTypes, Component } from 'react'
import { Motion, spring } from 'react-motion'
import style from './Template.less'

export default class Template extends Component {

	static propTypes = {

	}

	static defaultProps = {

	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
			{ process =>
				<div>
					{process.x}
				</div>
			}
			</Motion>
		)
	}

}

module.exports = Template