//импортируем React
import React, { PureComponent } from 'react';

import Submenu from 'components/Submenu';

import PropTypes from 'prop-types';
import requestData from '../utils/func';

//компонент для бокового меню на странице
export default class SubmenuContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            submenu: []
        }
    }

    static propTypes = {
        submenu: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        // получаем боковое меню
        requestData('submenu').then((submenu) => {
            this.setState({
                submenu
            });
        })
    }

    render() {
        const { submenu } = this.state;
        return (
            <Submenu submenu={submenu} />
        );
    }
}