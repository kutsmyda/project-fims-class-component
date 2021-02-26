import React, {Component} from 'react';
import styles from './Preloader.module.css'

const Preloader = ()=> {

        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
}

export default Preloader;