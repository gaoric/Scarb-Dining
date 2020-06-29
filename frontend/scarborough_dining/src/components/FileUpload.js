import React, { Component } from 'react';

export default class FileUpload extends Component {
    render() {
        return (
            <form>
                <div className='custom-file mt-4'>
                    <input type='file' className='custom-file-input' id='customFile'/>
                    <label className='custom-file-label' htmlFor='customFile'>
                        Choose file
                    </label>
                </div>
                <div className='uploadFile mb-4'>
                    <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4'/>
                </div>
            </form>
        );
    }
}